import { Pool } from 'pg';

export const aws_db_credentials = {
	host: process.env.AWS_DB_HOST,
	database: process.env.AWS_DB_NAME,
	port: process.env.AWS_DB_PORT,
	user: process.env.AWS_DB_USER,
	password: process.env.AWS_DB_PASSWORD,
};

const pool = new Pool(aws_db_credentials);

export const getAllPosts = async res => {
	const poolClient = await pool.connect();

	try {
		const sqlQuery = 'SELECT * FROM posts ORDER BY id DESC';
		const result = await poolClient.query(sqlQuery);

		res.status(200).json(result.rows);
	} catch (error) {
		res.status(400).json({ error: error.message });
	} finally {
		poolClient.release();
	}
};

export const createPost = async (req, res) => {
	const poolClient = await pool.connect();
	try {
		const { title, post_content } = req.body;
		const sqlQuery = `INSERT INTO posts (title, post_content) VALUES ($1, $2)`;
		const values = [title, post_content];

		await poolClient.query(sqlQuery, values);

		poolClient.release();

		res.status(201).json({ success: 'blog entry was added!' });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getSpecificPost = async (req, res) => {
	const poolClient = await pool.connect();

	try {
		const sqlQuery = 'SELECT * FROM posts WHERE id = $1';
		const result = await poolClient.query(sqlQuery, [req.query.post_id]);

		res.status(200).json(result.rows);
	} catch (error) {
		res.status(400).json({ error: error.message });
	} finally {
		poolClient.release();
	}
};

export const modifyPost = async (req, res) => {
	const poolClient = await pool.connect();

	const queryValues = [
		req.query.post_id,
		req.body.title,
		req.body.post_content,
	];

	const sqlQuery =
		'UPDATE posts SET title = $2, post_content = $3 WHERE id = $1';

	try {
		await poolClient.query(sqlQuery, queryValues);

		poolClient.release();

		res.status(200).json({ success: 'you made the update!' });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deletePost = async (req, res) => {
	const poolClient = await pool.connect();

	try {
		const sqlQuery = 'DELETE FROM posts WHERE id = $1';

		await poolClient.query(sqlQuery, [req.query.post_id]);

		poolClient.release();

		res.status(200).json('deleted post');
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getPostComments = async (req, res) => {
	const poolClient = await pool.connect();
	try {
		const sqlQuery =
			'SELECT name, post_id, comments.comment_id, comment_text, created_at FROM commenters JOIN comments ON commenters.id = comments.commenter_id WHERE post_id = $1 ORDER BY created_at DESC';

		let result = await poolClient.query(sqlQuery, [req.query.post_id]);

		res.status(200).json(result.rows);
	} catch (error) {
		res.status(400).json({ error: error.message });
	} finally {
		poolClient.release();
	}
};

export async function modifyComment(req, res) {
	const poolClient = await pool.connect();

	let queryValues = [
		req.query.post_id,
		req.body.comment_id,
		req.body.editedComment,
	];

	let sqlQuery =
		'UPDATE comments SET comment_text = $3 WHERE post_id = $1 AND comment_id = $2';

	try {
		await poolClient.query(sqlQuery, queryValues);

		res.status(200).json('successfully updated comment');
	} catch (error) {
		console.error(error.message);
		res.status(400).json(error.message);
	} finally {
		poolClient.release();
	}
}

export const deleteComment = async (req, res) => {
	const poolClient = await pool.connect();
	const sqlQuery =
		'DELETE FROM comments WHERE post_id = $1 AND comment_id = $2';
	const { post_id, comment_id } = req.body;

	try {
		await poolClient.query(sqlQuery, [post_id, comment_id]);

		res.status(200).json('deleted comment');
	} catch (error) {
		res.status(400).json({ error: error.message });
	} finally {
		poolClient.release();
	}
};

export const addCommentToBlogPost = async (req, res) => {
	const checkUserQuery = `SELECT * FROM commenters WHERE email = $1`;
	const addCommenterQuery = `INSERT INTO commenters (name, email) VALUES ($1,$2)`;
	const addCommentToPostQuery = `INSERT INTO comments (commenter_id, post_id, comment_text) VALUES ($1, $2, $3)`;

	const poolClient = await pool.connect();

	// check if user already exists
	let doesUserExist;

	try {
		doesUserExist = await poolClient.query(checkUserQuery, [
			req.body.userEmail,
		]);
	} catch (error) {
		console.error(error.message);
	}

	// add comment if user is found
	if (doesUserExist?.rowCount) {
		try {
			await poolClient.query(addCommentToPostQuery, [
				doesUserExist.rows[0].id,
				req.query.post_id,
				req.body.comment_text,
			]);

			res.status(201).json({ success: 'you successfully made a comment!' });
		} catch (error) {
			res.status(400).json({ error: error.message });
		} finally {
			poolClient.release();
		}
	} else {
		// create user if non-existent
		try {
			await poolClient.query(addCommenterQuery, [
				req.body.userName,
				req.body.userEmail,
			]);

			// add comment with new user info
			const getCommenterID = await poolClient.query(checkUserQuery, [
				req.body.userEmail,
			]);
			const commenterID = getCommenterID.rows[0].id;

			await poolClient.query(addCommentToPostQuery, [
				commenterID,
				req.query.post_id,
				req.body.comment_text,
			]);

			res.status(201).json({ success: 'you successfully made a comment!' });
		} catch (error) {
			res.status(400).json({ error: error.message });
		} finally {
			poolClient.release();
		}
	}
};
