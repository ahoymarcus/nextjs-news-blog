import { useRouter } from 'next/router' ;

// styles
import styles from '../../styles/Feed.module.css';

// components
import { Toolbar } from '../../components/Toolbar';




export const Feed = ({ pageNumber, articles }) => {
	console.log('pageNumber = ', pageNumber, '\n', articles);
	
	// router
	const router = useRouter();
	
	
	return (
		<div  className="page-container">
			<Toolbar />
			
			<div className={styles.main}>
				{articles.map((article, index) => {
					const { author, content, description, title, publishedAt, source, url, urlToImage } = article;	
					
					return (
						<div key={index} className={styles.post}>
							<h2 onClick={() => (window.location.href = url)}>{title}</h2>
							<p>{description}</p>
								{!!urlToImage && <img src={urlToImage} />}
						</div>
					);
				})}
			</div>
			<div className={styles.paginator}>
				<div 
					onClick={() => {
						if (pageNumber > 1) {
							router.push(`/feed/${pageNumber -1}`);
						}
					}}
					className={pageNumber === 1 ? styles.disabled : styles.active}
				>
					Prev
				</div>
				<div>#{pageNumber}</div>
				<div
					onClick={() => {
						if (pageNumber <= 4) {
							router.push(`/feed/${pageNumber + 1}`);
						}
					}}
					className={pageNumber === 5 ? styles.disabled : styles.active}
				>
					Next
				</div>
			</div>
		</div>
	);
};


// API
export const getServerSideProps = async pageContext => {
	const pageNumber = pageContext.query.slug;
	
	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1
			}
		}
	}
	
	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		},
	);
	
	const apiJson = await apiResponse.json();
	
	// Log at server side
	console.log(apiJson);
	
	const { articles } = apiJson;
	
	return {
		props: {
			pageNumber: Number.parseInt(pageNumber),
			articles
		}
	}
};



export default Feed;


