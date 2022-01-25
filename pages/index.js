// NEWS API
// https://newsapi.org/
// https://www.youtube.com/watch?v=xtItzwYG6oQ
// 0 hrs 47' 10''
import Head from 'next/head';

// styles
import styles from '../styles/Home.module.css';

// components
import { Toolbar } from '../components/Toolbar';




export default function Home() {
  return (
    <>
			<Head>
				<title>News Blog - Next.js</title>
			</Head>
			<div className="page-container">
				<Toolbar /> 
				
				<div className={styles.main}>
					<h1>Next.js News App</h1>
					
					<h3>Your one stop shop for the latest news articles</h3>
				</div>
				
			</div>
		</>
  )
}


