import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

function CreatePosts() {
	const [title, setTitle] = useState('');
	const [blogPost, setBlogPost] = useState('');
	const router = useRouter();

	const handleSubmitPost = async e => {
		e.preventDefault();

		const blogContent = { title, post_content: blogPost };
		try {
			await axios.post(`/api/posts`, blogContent);

			setTitle('');
			setBlogPost('');
			router.push('/posts');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className='relative top-20 h-screen'>
			<form className='flex flex-col w-[70%] m-auto py-2'>
				<div>
					<label className='block' htmlFor='title'>
						Title:{' '}
					</label>
					<input
						className='w-full px-2'
						type='text'
						name='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<label className='block' htmlFor='blogPost'>
						Blog Post:{' '}
					</label>
					<textarea
						className='w-full px-2'
						name='blogPost'
						id='blogPost'
						rows={15}
						value={blogPost}
						onChange={e => setBlogPost(e.target.value)}
						required
					/>
				</div>
				<button
					className='mt-4 py-4 outline hover:bg-black hover:text-white'
					type='submit'
					onClick={handleSubmitPost}
				>
					Post
				</button>
			</form>
		</div>
	);
}
export default CreatePosts;
