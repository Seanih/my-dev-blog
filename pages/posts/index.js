import Head from 'next/head';
import { useEffect, useState } from 'react';

export async function getServerSideProps(context) {
	let result, blogPosts;

	result = await fetch('http://localhost:3000/api/posts');
	blogPosts = await result.json();

	// console.log(error.message);

	return {
		props: { blogPosts },
	};
}

function Posts({ blogPosts }) {
	const [allBlogPosts, setAllBlogPosts] = useState([]);

	useEffect(() => {
		if (blogPosts.length > 0) {
			setAllBlogPosts(blogPosts);
		}
	}, [blogPosts]);

	return (
		<div className='relative top-20 h-screen'>
			<Head>
				<title>Code Chronicles | Posts</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex flex-col justify-center items-center'>
				{allBlogPosts.length < 1 ? (
					<p>no blog posts</p>
				) : (
					allBlogPosts.map(post => (
						<div key={post.id} className='h-[10rem] w-[30rem] border border-slate-700 rounded-xl my-4'>
							<h3>{post.title}</h3>
						</div>
					))
				)}
			</main>
		</div>
	);
}
export default Posts;
