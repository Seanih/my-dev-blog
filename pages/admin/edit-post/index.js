import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import PostPreview from '../../../components/PostPreview';
import AdminNav from '../../../components/AdminNav';
import Link from 'next/link';
import axios from 'axios';

function Posts() {
	const [blogPosts, setBlogPosts] = useState([]);

	const handleDeletePost = async post => {
		try {
			let response = confirm(`Delete post titled: "${post.title}"?`);

			if (response) {
				await axios.delete(`/api/posts/${post.id}`);
				window.location.reload();
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		const getPosts = async () => {
			const { data } = await axios.get('/api/posts');
			setBlogPosts(data);
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
				<title>Code Chronicles | Edit Posts</title>
				<meta
					name='description'
					content='a new developer documenting and sharing his experiences'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col justify-center items-center'>
				<AdminNav />
				{blogPosts.length < 1 ? (
					<p>no blog posts</p>
				) : (
					<motion.div variants={list} initial='hidden' animate='visible'>
						{blogPosts.map(post => (
							<motion.div className='relative group' key={post.id} variants={item}>
								<AiFillDelete
									className='absolute left-[0.5rem] md:left-0 top-1/2 hover:cursor-pointer hover:scale-125'
									onClick={() => {
										handleDeletePost(post);
									}}
								/>
								<Link href={`/admin/edit-post/${post.id}`}>
									<AiFillEdit className='absolute top-8 right-[10%] group-hover:scale-125 ease-in duration-200' />
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
