import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PostPreview from '../../components/PostPreview';
import Link from 'next/link';
import axios from 'axios';

function Posts() {
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const { data } = await axios.get('/api/posts');
			try {
				if (data) {
					setBlogPosts(data);
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		getPosts();
	}, []);

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
				<h1 className='my-8'>Blog Posts</h1>
				{blogPosts.length < 1 ? (
					<p>no blog posts</p>
				) : (
					<motion.div variants={list} initial='hidden' animate='visible'>
						{blogPosts.map(post => (
							<motion.div key={post.id} variants={item}>
								<Link href={`/posts/${post.id}`}>
									<PostPreview post={post} />
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</main>
		</div>
	);
}
export default Posts;
