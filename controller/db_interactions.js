import { Client, Pool } from 'pg';

const db_credentials = {
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
};

const client = new Client(db_credentials);

const pool = new Pool(db_credentials);

export const getAllPosts = async res => {
	const poolClient = await pool.connect();

	try {
		const sqlQuery = 'SELECT * FROM posts ORDER BY id DESC';
		const result = await poolClient.query(sqlQuery);

		res.status(200).json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	} finally {
		poolClient.release();
	}
};

export const createPost = async (req, res) => {
	try {
		const { title, post_content } = req.body;
		const sqlQuery = `INSERT INTO posts (title, post_content) VALUES ($1, $2)`;
		const values = [title, post_content];

		await client.connect();
		await client.query(sqlQuery, values);

		res.status(200).json({ success: 'blog entry was added!' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	} finally {
		client.end();
	}
};

export const getSpecificPost = async (req, res) => {
	const poolClient = await pool.connect();

	try {
		const sqlQuery = 'SELECT * FROM posts WHERE id = $1';

		const result = await poolClient.query(sqlQuery, [req.query.post_id]);

		res.status(200).json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	} finally {
		poolClient.release();
	}
};

export const modifyPost = async (req, res) => {
	try {
		// make post_id first item in the query array
		const queryValues = [req.query.post_id];

		//* <--------- Query with multiple params --------->
		// 1) start query string
		let sqlQuery = `UPDATE posts SET `;

		// 2) dynamically retrieve key value pairs from req.body and add to query string
		let i = 2;
		Object.entries(req.body).forEach(([key, value]) => {
			sqlQuery += `${key} = $${i}, `;
			queryValues.push(value);
			i++;
		});

		// 3) complete the query string
		sqlQuery += `updated_at = NOW() WHERE id = $1`;
		//* <--------- Query with multiple params --------->

		await client.connect();
		await client.query(sqlQuery, queryValues);

		res.status(200).json({ success: 'you made the update!' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	} finally {
		client.end();
	}
};

export const deletePost = async (req, res) => {
	try {
		const sqlQuery = 'DELETE FROM posts WHERE id = $1';

		await client.connect();
		await client.query(sqlQuery, [req.query.post_id]);

		res.status(200).json({ success: 'deleted post!' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	} finally {
		client.end();
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
	} finally {
		poolClient.release();
	}

	// add comment if user is found
	if (doesUserExist?.rowCount) {
		try {
			await client.connect();
			await client.query(addCommentToPostQuery, [
				doesUserExist.rows[0].id,
				req.query.post_id,
				req.body.comment_text,
			]);

			res.status(201).json({ success: 'you successfully made a comment!' });
		} catch (error) {
			res.status(500).json({ error: error.message });
		} finally {
			client.end();
		}
	} else {
		// create user if non-existent
		try {
			await client.connect();

			await client.query(addCommenterQuery, [
				req.body.userName,
				req.body.userEmail,
			]);

			client.end();

			// add comment with new user info
			const getCommenterID = await poolClient.query(checkUserQuery, [
				req.body.userEmail,
			]);
			const commenterID = getCommenterID.rows[0].id;
			poolClient.release();

			await client.connect();

			await client.query(addCommentToPostQuery, [
				commenterID,
				req.query.post_id,
				req.body.comment_text,
			]);

			res.status(201).json({ success: 'you successfully made a comment!' });
		} catch (error) {
			res.status(500).json({ error: error.message });
		} finally {
			client.end();
			poolClient.release();
		}
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
		console.error(error.message);
		res.status(500).json({ error: error.message });
	}
};
