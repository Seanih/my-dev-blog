import Head from 'next/head';
import { marked } from 'marked';
import { motion } from 'framer-motion';
import UserComment from '../../components/UserComment';

export async function getServerSideProps({ params: { id } }) {
	let response = await fetch(
		`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/posts/${id}`
	);

	const blogPost = await response.json();
	const post = blogPost[0];

	response = await fetch(
		`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/posts/${id}/comments`
	);
	const comments = await response.json();

	return {
		props: {
			post,
			comments,
		},
	};
}

function PostID({ post, comments }) {
	const markdownPost = marked(post.post_content);

	return (
		<div className='relative top-20'>
			<Head>
				<title>Code Chronicles | Blog Post #{post.id}</title>
				<meta
					name='description'
					content='A blog post for Code Chronicles'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='relative top-8 w-[90%] max-w-[1200px]  m-auto border border-black/40 rounded-xl'>
				<motion.div
					initial={{ opacity: 0, x: -75 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<h1 className='pt-8 mb-12 text-center'>{post.title}</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 75 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
				>
					<div className='w-[90%] m-auto mb-8'>
						<div dangerouslySetInnerHTML={{ __html: markdownPost }} />
					</div>
				</motion.div>
			</div>
			<div className='pb-8'>
				{comments.map(comment => (
					<UserComment key={comment.comment_id} comment={comment} />
				))}
			</div>
		</div>
	);
}
export default PostID;
