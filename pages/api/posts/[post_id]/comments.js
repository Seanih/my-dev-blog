import {
	addCommentToBlogPost,
	deleteComment,
	getPostComments,
	modifyComment,
} from '../../../../controller/db_interactions';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
	const { session } = await getServerSession(req, res, authOptions);

	if (req.method === 'GET') {
		return getPostComments(req, res);
	}

	if (req.method === 'POST') {
		if (session) {
			return addCommentToBlogPost(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}

	if (req.method === 'PATCH') {
		if (session) {
			return modifyComment(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}

	if (req.method === 'DELETE') {
		if (session) {
			return deleteComment(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}
}
