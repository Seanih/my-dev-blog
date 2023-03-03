function DeleteModal({ setShowDeleteModal, handleDeleteComment }) {
	return (
		<div className='fixed top-0 z-[200] h-full w-full bg-black/70 flex justify-center items-center'>
			<div className='bg-slate-200 rounded-lg py-8 px-12'>
				<p className='text-center mb-4'>
					Are you sure you want to delete your comment?
				</p>
				<div>
					<div className='grid grid-cols-2 gap-4'>
						<button
							className='border border-red-800 rounded-md px-4 text-red-600 hover:bg-red-600 hover:text-white hover:font-bold'
							onClick={() => handleDeleteComment()}
						>
							Yes
						</button>
						<button
							className='border border-black rounded-md px-4 hover:bg-black hover:text-white hover:font-bold'
							onClick={() => setShowDeleteModal(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DeleteModal;
