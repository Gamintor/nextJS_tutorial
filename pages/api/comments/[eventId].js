import { connectDatabase, insertDocument, getAllDocuments } from '../../helpers/db-util';

async function handler(req, res) {
	const eventId = req.query;

	let client;
	try {
		client = await connectDatabase();
	} catch (e) {
		res.status(500).json({ message: 'Connecting to the database failed!' });
		return;
	}

	if (req.method === 'POST') {
		const { email, name, text } = req.body;
		if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
			res.status(422).json({ message: 'Invalid input!' });
			client.close();
			return;
		}
		const newComment = {
			email,
			name,
			text,
			eventId,
		};
		let result;
		try {
			result = await insertDocument(client, newComment, 'comments');
			newComment._id = result.insertedId;
			res.status(201).json({ message: 'Added comment!', comment: newComment });
		} catch (e) {
			res.status(500).json({ message: 'Failed comment insertion' });
		}
	}

	if (req.method === 'GET') {
		try {
			const documents = await getAllDocuments(client, 'comments', { _id: -1 });
			res.status(200).json({ comments: documents });
		} catch (e) {
			res.status(500).json({ message: 'Failed getting comments' });
		}
	}
	client.close();
}

export default handler;
