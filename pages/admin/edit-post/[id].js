import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdminNav from '../../../components/AdminNav';
import { Pool } from 'pg';
import { aws_db_credentials } from '../../../controller/db_interactions';
import { useSession } from 'next-auth/react';

export async function getServerSideProps(context) {
	const pool = new Pool(aws_db_credentials);
	const poolClient = await pool.connect();
	const postQuery = 'SELECT * FROM posts WHERE id = $1';
	const postResult = await poolClient.query(postQuery, [context.params.id]);

	postResult.rows[0].created_at = postResult.rows[0].created_at.toISOString();
	postResult.rows[0].updated_at = postResult.rows[0].updated_at.toISOString();

	poolClient.release();

	return {
		props: {
			post: postResult.rows[0],
		},
	};
}

function EditSpecificPost({ post }) {
	const [editedBlogTitle, setEditedBlogTitle] = useState(post.title);
	const [editedBlogPost, setEditedBlogPost] = useState(post.post_content);
	const { data: session } = useSession();
	const router = useRouter();

	const handleEditPost = async e => {
		e.preventDefault();

		const blogContent = {
			title: editedBlogTitle,
			post_content: editedBlogPost,
		};

		try {
			await axios.patch(`/api/posts/${post.id}`, blogContent);

			setEditedBlogTitle('');
			setEditedBlogPost('');
			router.push('/posts');
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		if (session?.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
			router.push('/sign-in');
		}
	}, [session?.user.email, router]);

	return (
		<div className='relative top-20'>
			<form
				className='flex flex-col w-[70%] m-auto py-2'
				onSubmit={handleEditPost}
			>
				<div>
					<label className='block' htmlFor='title'>
						Edit Title:{' '}
					</label>
					<input
						className='w-full px-2 mt-2 mb-8'
						type='text'
						name='title'
						value={editedBlogTitle}
						onChange={e => setEditedBlogTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<label className='block' htmlFor='blogPost'>
						Edit Blog Post:{' '}
					</label>
					<textarea
						className='w-full px-2 mt-2'
						name='blogPost'
						id='blogPost'
						rows={15}
						value={editedBlogPost}
						onChange={e => setEditedBlogPost(e.target.value)}
						required
					/>
				</div>
				<button
					className='mt-4 py-4 outline hover:bg-black hover:text-white'
					type='submit'
				>
					Submit Edit
				</button>
			</form>
			<AdminNav page={router.asPath} />
		</div>
	);
}
export default EditSpecificPost;
