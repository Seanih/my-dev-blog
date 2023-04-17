import {
	deletePost,
	getSpecificPost,
	modifyPost,
} from '../../../../controller/db_interactions';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
	const { session } = await unstable_getServerSession(req, res, authOptions);

	if (req.method === 'GET') {
		return getSpecificPost(req, res);
	}

	if (req.method === 'PATCH') {
		if (session) {
			return modifyPost(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}

	if (req.method === 'DELETE') {
		if (session) {
			return deletePost(req, res);
		} else {
			res
				.status(401)
				.json({ error: "You're not authorized to make this request" });
		}
	}
}
