import { marked } from 'marked';
import { motion } from 'framer-motion';

export async function getServerSideProps({ params: { id } }) {
	const response = await fetch(`http://localhost:3000/api/posts/${id}`);

	const blogPost = await response.json();
	const post = blogPost[0];

	return {
		props: {
			post,
		},
	};
}

function PostID({ post }) {
	const markdownPost = marked(post.post_content);

	return (
		<div className='relative top-20'>
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
		</div>
	);
}
export default PostID;
