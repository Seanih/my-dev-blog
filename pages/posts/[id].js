import Head from 'next/head';
import { marked } from 'marked';
import { motion } from 'framer-motion';
import UserComment from '../../components/UserComment';
import AddComment from '../../components/AddComment';
import { useSession } from 'next-auth/react';
import { Pool } from 'pg';
import { aws_db_credentials } from '../../controller/db_interactions';

export async function getServerSideProps({ params: { id } }) {
	// get specific post from DB
	const pool = new Pool(aws_db_credentials);
	const poolClient = await pool.connect();
	const postQuery = 'SELECT * FROM posts WHERE id = $1';
	const postResult = await poolClient.query(postQuery, [id]);

	postResult.rows[0].created_at = postResult.rows[0].created_at.toISOString();
	postResult.rows[0].updated_at = postResult.rows[0].updated_at.toISOString();

	// get post comments from DB
	const commentsQuery =
		'SELECT name, email, post_id, comments.comment_id, comment_text, created_at FROM commenters JOIN comments ON commenters.id = comments.commenter_id WHERE post_id = $1 ORDER BY created_at DESC';
	const commentsResult = await poolClient.query(commentsQuery, [id]);

	commentsResult.rows.forEach(comment => {
		comment.created_at = comment.created_at.toISOString();
	});

	poolClient.release();

	return {
		props: {
			post: postResult.rows[0],
			comments: commentsResult.rows,
		},
	};
}

function PostID({ post, comments }) {
	const { data: session, status } = useSession();
	const markdownPost = marked(post.post_content);
	const date = new Date(post.created_at).toLocaleString();
	const formattedDate = date.split(',')[0];

	return (
		<div className='relative m-auto top-20'>
			<Head>
				<title>Code Chronicles | Blog Post</title>
				<meta name='description' content='A blog post for Code Chronicles' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='pt-8'>
				<article className='w-[90%] max-w-[1200px] m-auto border border-black/40 rounded-xl'>
					<motion.div
						initial={{ opacity: 0, x: -75 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h1 className='pt-8 mx-4 text-center'>{post.title}</h1>
						<div className='mt-2 mb-8 text-sm italic text-center'>
							<span className='mr-2'>Posted:</span>
							{formattedDate}
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 75 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<div className='w-[90%] max-w-[1200px] m-auto mb-8'>
							<div dangerouslySetInnerHTML={{ __html: markdownPost }} />
						</div>
					</motion.div>
				</article>

				{/* ----------> Comments Section <---------- */}
				<section>
					<AddComment postID={post.id} status={status} session={session} />

					<div className='mt-8'>
						<h3 className='mb-4 text-center'>Comments</h3>
						{comments.length < 1 ? (
							<p className='italic text-center'>
								No comments have been made yet
							</p>
						) : (
							<>
								{comments.map(comment => (
									<div key={comment.comment_id}>
										<UserComment
											postID={post.id}
											comment={comment}
											userEmail={session?.user.email}
										/>
									</div>
								))}
							</>
						)}
					</div>
				</section>
			</div>
		</div>
	);
}
export default PostID;
