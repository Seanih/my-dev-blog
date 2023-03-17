import { marked } from 'marked';
import { useRouter } from 'next/router';

function PostPreview({ post }) {
	const localTime = new Date(post.created_at).toLocaleString();
	const markdownPost = marked(post.post_content).slice(0, 150) + '...';

	return (
		<div className='flex items-center w-[82%] sm:w-[90%] max-w-[900px] py-8 mx-auto  border border-slate-700 rounded-xl my-8 md:hover:scale-105 hover:shadow-xl duration-300 group'>
			<div className='w-4/5 px-2 m-auto flex flex-col justify-center'>
				<h2 className=' group-hover:text-sky-700 mb-4'>{post.title}</h2>
				<p className='italic mb-4' style={{ fontSize: '.9rem' }}>
					<span className='mr-2'>Posted:</span> {localTime}
				</p>
				<div
					className='border border-black rounded-xl overflow-auto p-2 bg-slate-200'
					dangerouslySetInnerHTML={{ __html: markdownPost }}
				/>
				<div className='group-hover:text-sky-700 group-hover:underline mt-4'>
					Read More
				</div>
			</div>
		</div>
	);
}
export default PostPreview;
