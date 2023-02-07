import Head from 'next/head';

function About() {
	return (
		<div className='relative top-20 h-screen'>
			<Head>
				<title>Code Chronicles | About</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex flex-col justify-center items-center'>About</main>
		</div>
	);
}
export default About;
