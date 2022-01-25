import { useRouter } from 'next/router';

// styles
import styles from '../styles/Toolbar.module.css';



export const Toolbar = () => {
	const router = useRouter();
	
	
	return (
		<div className={styles.main}>
			<div onClick={() => router.push('/')}>Home</div>
			<div onClick={() => router.push('/feed/1')}>Feed</div>
			<div onClick={() => router.push('/employee-of-the-month')}>EmployeeOfTheMonth</div>
			<div onClick={() => window.location.href = 'https://github.com/ahoymarcus/nextjs-news-blog'}>Github</div>
		</div>
	);
};



