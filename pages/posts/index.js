import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
		console.error(error.message);
	}
}

function Posts({ blogPosts }) {
	const [allBlogPosts, setAllBlogPosts] = useState([]);

	useEffect(() => {
		if (blogPosts.length > 0) {
			setAllBlogPosts(blogPosts);
		}
	}, [blogPosts]);

	// Framer Motion attributes
	const list = {
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: 'afterChildren',
			},
		},
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

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
					<motion.div variants={list} initial='hidden' animate='visible'>
						{allBlogPosts.map(post => (
							<motion.div key={post.id} variants={item}>
								<PostPreview post={post} />
							</motion.div>
						))}
					</motion.div>
				)}
			</main>
		</div>
	);
}
export default Posts;
