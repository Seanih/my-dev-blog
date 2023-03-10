import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteModal from './DeleteModal';

function UserComment({
	postID,
	userEmail,
	comment: { name, email, comment_id, comment_text, created_at },
}) {
	const [datePosted, setDatePosted] = useState('');
	const [isEditingComment, setIsEditingComment] = useState(false);
	const [editedComment, setEditedComment] = useState(comment_text);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	// capitalize the first letters of the user's names
	const formattedName = user_name => {
		let fixedName;
		let splitName = user_name.split(' ');

		if (splitName.length > 1) {
			fixedName =
				splitName[0].toUpperCase().slice(0, 1) +
				splitName[0].slice(1) +
				' ' +
				splitName[1].toUpperCase().slice(0, 1) +
				'.';
		} else {
			fixedName =
				splitName[0].toUpperCase().slice(0, 1) + splitName[0].slice(1);
		}

		return fixedName;
	};

	const handleEditComment = async e => {
		e.preventDefault();

		try {
			await axios.patch(`/api/posts/${postID}/comments`, {
				comment_id,
				editedComment,
			});

			window.location.reload();
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleDeleteComment = async () => {
		try {
			await axios.delete(`/api/posts/${postID}/comments`, {
				data: { post_id: postID, comment_id },
			});

			window.location.reload();
		} catch (error) {
			console.error(error.message);
		}
	};

	// prevents hydration errors
	useEffect(() => {
		setDatePosted(new Date(created_at).toLocaleString());
	}, [created_at]);

	return (
		<>
			{showDeleteModal && (
				<DeleteModal
					setShowDeleteModal={setShowDeleteModal}
					handleDeleteComment={handleDeleteComment}
				/>
			)}
			<div className='w-[80%] max-w-[800px] m-auto border border-black/40 rounded-xl mb-4'>
				<div className='w-[90%] m-auto py-4'>
					<div className='flex flex-wrap justify-between items-center w-4/5 m-auto mb-2 text-sm'>
						<div className='text-sm font-bold mr-4'>
							Name:{' '}
							<span className='ml-2 text-base font-normal italic'>
								{formattedName(name)}
							</span>
						</div>
						<div className='font-bold'>
							Posted:{' '}
							<span className='italic ml-2 font-normal'>{datePosted}</span>
						</div>
					</div>
					{isEditingComment && userEmail === email ? (
						<textarea
							className='border border-black/40 rounded-xl w-full px-4 py-2'
							name='edited_comment'
							id='edited_comment'
							autoFocus
							value={editedComment}
							placeholder={comment_text}
							onChange={e => setEditedComment(e.target.value)}
							required
						/>
					) : (
						<div className='bg-white border border-black/40 rounded-xl p-4'>
							{comment_text}
						</div>
					)}
					{/* EDIT & DELETE buttons logic */}
					{userEmail === email && (
						<div className='flex mt-4'>
							{isEditingComment ? (
								<>
									<button
										className='mr-4 border border-black px-4 rounded-md bg-red-600 text-white hover:bg-red-700 hover:scale-105 hover:font-semibold hover:cursor-pointer ease-in duration-100'
										type='button'
										onClick={() => setIsEditingComment(false)}
									>
										Cancel
									</button>
									<button
										className='border border-black px-4 rounded-md bg-green-600 text-white hover:bg-green-500 hover:text-black hover:scale-105 hover:font-semibold hover:cursor-pointer ease-in duration-100'
										type='submit'
										onClick={handleEditComment}
									>
										Confirm
									</button>
								</>
							) : (
								<>
									<button
										className='mr-4 border border-black px-4 rounded-md bg-sky-700 text-white hover:bg-sky-600 hover:scale-105 hover:font-semibold hover:cursor-pointer ease-in duration-100'
										type='button'
										onClick={() => setIsEditingComment(true)}
									>
										edit
									</button>
									<button
										className='border border-black px-4 rounded-md bg-red-700 text-white hover:text-black hover:bg-red-500 hover:scale-105 hover:font-semibold hover:cursor-pointer ease-in duration-100'
										type='button'
										onClick={() => setShowDeleteModal(true)}
									>
										delete
									</button>
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
export default UserComment;
