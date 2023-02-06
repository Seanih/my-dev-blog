import { createPost, getAllPosts } from '../../../controller/db_interactions';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		return getAllPosts(res);
	}

	if (req.method === 'POST') {
		return createPost(req, res);
	}
}
