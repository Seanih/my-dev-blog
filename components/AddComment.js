import axios from 'axios';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

function AddComment({ postID, status, session }) {
	const [userComment, setUserComment] = useState('');

	const handleSubmitComment = async e => {
		e.preventDefault();

		try {
			await axios.post(`/api/posts/${postID}/comments`, {
				userName: session.user.name,
				userEmail: session.user.email,
				comment_text: userComment,
			});

			window.location.reload();
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className='m-auto mt-10 rounded-lg w-[80%] max-w-[800px] bg-gradient-to-br from-slate-200 via-slate-500 to-black'>
			<form className='flex flex-col py-8' onSubmit={handleSubmitComment}>
				{status === 'authenticated' ? (
					<>
						<div className='mb-4 w-[80%] m-auto'>
							<label className='block mb-1' htmlFor='comment'>
								Enter Comment:
							</label>
							<textarea
								className='border border-black/40 rounded-xl w-full px-4 py-2'
								name='comment'
								id='comment'
								rows='3'
								value={userComment}
								placeholder='e.g., "I really love your blog!"'
								onChange={e => setUserComment(e.target.value)}
								required
							/>
						</div>
						<button
							type='submit'
							className='border border-black w-1/2 px-8 py-4 m-auto rounded-xl text-white font-semibold bg-sky-600 hover:text-black hover:bg-sky-500'
						>
							Add Comment
						</button>
					</>
				) : (
					<button
						className='w-[75%] max-w-[300px] m-auto bg-sky-500 text-black font-semibold hover:text-slate-100 rounded-xl py-4'
						onClick={signIn}
					>
						Sign in to leave a comment
					</button>
				)}
			</form>
		</div>
	);
}
export default AddComment;
