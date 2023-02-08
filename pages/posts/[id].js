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
	const markdownPost = marked(post.post_content);
	return (
		<div className='relative top-20 h-screen'>
			<div>{post.title}</div>
			<div dangerouslySetInnerHTML={{ __html: markdownPost }} />
		</div>
	);
}
export default PostID;
