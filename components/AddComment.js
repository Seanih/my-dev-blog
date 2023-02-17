function AddComment() {
	return (
		<div className='border border-black rounded-lg w-[80%] max-w-[800px] m-auto'>
			<form className='flex flex-col py-8'>
				<div className='mb-4 w-[80%] m-auto'>
					<label htmlFor='comment' className='block mb-1'>
						Enter Comment:
					</label>
					<textarea
						name='comment'
						id=''
						rows='5'
						placeholder='Type comment here'
						className='border border-black/40 rounded-xl w-full px-4 py-2'
					/>
				</div>
				<button
					type='submit'
					className='border border-black w-1/2 px-8 py-4 m-auto rounded-xl text-white bg-green-600 hover:text-black hover:bg-green-400'
				>
					Add Comment
				</button>
			</form>
		</div>
	);
}
export default AddComment;
