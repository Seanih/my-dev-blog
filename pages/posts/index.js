import Head from 'next/head';
import { useEffect, useState } from 'react';
import PostPreview from '../../components/PostPreview';

export async function getServerSideProps(context) {
	let result, blogPosts;

	try {
		result = await fetch('http://localhost:3000/api/posts');
		blogPosts = await result.json();

		return {
			props: { blogPosts },
		};
	} catch (error) {
		console.log(error.message);
	}
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
					allBlogPosts.map(post => <PostPreview key={post.id} post={post} />)
				)}
			</main>
		</div>
	);
}
export default Posts;
