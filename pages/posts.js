import Head from 'next/head';

function Posts() {
	return (
		<div className='relative top-20'>
			<Head>
				<title>Code Chronicles | Posts</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex flex-col justify-center items-center'>
				Posts
			</main>
		</div>
	);
}
export default Posts;
