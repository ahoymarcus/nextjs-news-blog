import Head from 'next/head';
import Link from 'next/link';

// styles
import styles from '../styles/EmployeeOfTheMonth.module.css';

// components
import { Toolbar } from '../components/Toolbar';



export const EmplyeeOfTheMont = ({ employee }) => {
	console.log(employee);
	
	const { name, position, image, description } = employee;
	
	console.log(image);
	
	
	return (
		<div className="page-container">
			<Head>
				<title>Employee Of The Month</title>
			</Head>
			
			<Toolbar />
			
			<div className={styles.main}>
				<h1>Emplyee Of The Month</h1>
				
				<div className={styles.emplyeeOfTheMont}>
					<h3>{name}</h3>
					<h6>{position}</h6>
					<img src={image} />
					<p>{description}</p>
				</div>
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



