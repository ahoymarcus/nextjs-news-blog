import Link from 'next/link';



export const EmplyeeOfTheMont = ({ employee }) => {
	console.log(employee);
	
	
	return (
		<div className="page-container">
			<div>
				<h1>Emplyee Of The Mont</h1>
				<Link href="/"><a>Home</a></Link>
			</div>
		</div>
	);
};


// pageContext is provided automatically by Next-JS
export const getServerSideProps = async pageContext => {
	const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
	const employee = await apiResponse.json();
	
	console.log(employee);
	
	return {
		employee
	};
};



export default EmplyeeOfTheMont;



