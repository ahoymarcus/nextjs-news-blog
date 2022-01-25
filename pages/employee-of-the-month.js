import Link from 'next/link';



export const EmplyeeOfTheMont = ({ employee }) => {
	console.log(employee);
	
	const { name, position, image, description } = employee;
	
	
	return (
		<div className="page-container">
			<div>
				<h1>Emplyee Of The Month</h1>
				<Link href="/"><a>Home</a></Link>
				
				<h3>{name}</h3>
				<h6>{position}</h6>
				<img src={image} />
				<h5>{description}</h5>
			</div>
		</div>
	);
};


// 1. https://raw.githubusercontent.com/ahoymarcus/nextjs-news-blog/main/db.json
// 2. https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth
// pageContext is provided automatically by Next-JS
export const getServerSideProps = async pageContext => {
	const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',);
	const employee = await apiResponse.json();
	
	return {
		props: {
			employee
		}
	};
};



export default EmplyeeOfTheMont;



