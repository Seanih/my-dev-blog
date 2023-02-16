import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AdminNav from '../../../components/AdminNav';

export async function getServerSideProps({ params: { id }, context }) {
	const session = await getSession(context);

	if (session?.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/posts/${id}`
	);
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
