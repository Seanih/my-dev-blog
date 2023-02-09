import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AdminNavbar from '../../../components/AdminNavbar';

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

function EditSpecificPost({ post }) {
	const [editedBlogTitle, setEditedBlogTitle] = useState(post.title);
	const [editedBlogPost, setEditedBlogPost] = useState(post.post_content);
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

	return (
		<div className='relative top-20'>
			<form className='flex flex-col w-[70%] m-auto py-2'>
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
					onClick={handleEditPost}
				>
					Submit Edit
				</button>
			</form>
			<AdminNavbar page={router.asPath} />
		</div>
	);
}
export default EditSpecificPost;
