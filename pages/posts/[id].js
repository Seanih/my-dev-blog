import { marked } from 'marked';

export async function getServerSideProps({ params: { id } }) {
	const response = await fetch(`http://localhost:3000/api/posts/${id}`);

	const blogPost = await response.json();

	return {
		props: {
			blogPost,
		},
	};
}

function PostID({ blogPost }) {
	return <div className='relative top-20 h-screen'>PostID</div>;
}
export default PostID;
