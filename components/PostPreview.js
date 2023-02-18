function PostPreview({ post }) {
	const localTime = new Date(post.created_at).toLocaleString();

	return (
		<div className='flex h-[10rem] w-[30rem] border border-slate-700 rounded-xl my-4 sm:hover:scale-105 hover:shadow-xl duration-300 group'>
			<div className='w-4/5 m-auto'>
				<h2 className='mb-4 group-hover:text-sky-700'>{post.title}</h2>
				<p className='mb-0 italic'>
					<span className='mr-2'>Posted:</span> {localTime}
				</p>
			</div>
		</div>
	);
}
export default PostPreview;
