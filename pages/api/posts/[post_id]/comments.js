import {
	addCommentToBlogPost,
	deleteComment,
	getPostComments,
} from '../../../../controller/db_interactions';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		return getPostComments(req, res);
	}

	if (req.method === 'POST') {
		return addCommentToBlogPost(req, res);
	}

	if (req.method === 'DELETE') {
		return deleteComment(req, res);
	}
}
