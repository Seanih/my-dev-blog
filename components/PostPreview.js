import Link from 'next/link';

function PostPreview({ post }) {
	return (
		<Link href={`/posts/${post.id}`}>
			<div className='h-[10rem] w-[30rem] border border-slate-700 rounded-xl my-4'>
				<h3>{post.title}</h3>
			</div>
		</Link>
	);
}
export default PostPreview;
