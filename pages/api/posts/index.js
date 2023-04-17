import { createPost, getAllPosts } from '../../../controller/db_interactions';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
	const { session } = await unstable_getServerSession(req, res, authOptions);

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
