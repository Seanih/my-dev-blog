import {
	addCommentToBlogPost,
	deletePost,
	getSpecificPost,
	modifyPost,
} from '../../../controller/db_interactions';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		return getSpecificPost(req, res);
	}

	if (req.method === 'POST') {
		return addCommentToBlogPost(req, res);
	}

	if (req.method === 'PATCH') {
		return modifyPost(req, res);
	}

	if (req.method === 'DELETE') {
		return deletePost(req, res);
	}
}
