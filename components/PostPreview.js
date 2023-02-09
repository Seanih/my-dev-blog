import Link from 'next/link';

function PostPreview({ post }) {
	const localTime = new Date(post.created_at).toLocaleString();

	return (
		<Link href={`/posts/${post.id}`}>
			<div className='flex h-[10rem] w-[30rem] border border-slate-700 rounded-xl my-4 hover:scale-105 hover:shadow-xl duration-300 group'>
				<div className='w-4/5 m-auto'>
					<h2 className='mb-4 group-hover:text-sky-700'>{post.title}</h2>
					<p className='mb-0'>
						<i>Posted: {localTime}</i>
					</p>
				</div>
			</div>
		</Link>
	);
}
export default PostPreview;
