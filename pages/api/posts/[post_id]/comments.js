import { getPostComments } from '../../../../controller/db_interactions';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		return getPostComments(req, res);
	}
}
