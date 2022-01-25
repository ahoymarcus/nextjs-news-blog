// NEWS API
// https://newsapi.org/
// https://www.youtube.com/watch?v=xtItzwYG6oQ
// 0 hrs 24' 20''
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// styles
import styles from '../styles/Home.module.css';




export default function Home() {
  return (
    <>
			<div className="page-container">
				<Link href="/employee-of-the-month"><a>Eom</a></Link> 
				
				<div className={styles.main}>
					<h1>Next.js News App</h1>
					
					<h3>Your one stop shop for the latest news articles</h3>
				</div>
				
			</div>
		</>
  )
}


