import { createPost, getAllPosts } from '../../../controller/db_interactions';
import { getServerSession } from 'next-auth/next';
import { AuthOptions } from 'next-auth';

export default async function handler(req, res) {
	const { session } = getServerSession(req, res, AuthOptions);

	if (req.method === 'GET') {
		return getAllPosts(res);
	}

	if (req.method === 'POST') {
		if (session) {
			return createPost(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}
}
