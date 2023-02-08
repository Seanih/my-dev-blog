import { marked } from 'marked';

export async function getServerSideProps({ params: { id } }) {
	const response = await fetch(`http://localhost:3000/api/posts/${id}`);

	const blogPost = await response.json();
	const post = blogPost[0];

	return {
		props: {
			post,
		},
	};
}

function PostID({ post }) {
	return (
		<div className='relative top-20 h-screen'>
			<h1>{post.title}</h1>
			<p>{post.post_content}</p>
		</div>
	);
}
export default PostID;
