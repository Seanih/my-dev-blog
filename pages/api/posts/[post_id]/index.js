import {
	deletePost,
	getSpecificPost,
	modifyPost,
} from '../../../../controller/db_interactions';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
	const { session } = getServerSession(req, res);

	if (req.method === 'GET') {
		return getSpecificPost(req, res);
	}

	if (req.method === 'PATCH') {
		if (session.user.email === NEXT_PUBLIC_ADMIN_EMAIL) {
			return modifyPost(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}

	if (req.method === 'DELETE') {
		if (session.user.email === NEXT_PUBLIC_ADMIN_EMAIL) {
			return deletePost(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}
}
