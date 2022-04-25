import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
			res.status(422).json({ message: 'Invalid input!!!' });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;
		try {
			client = await MongoClient.connect('mongodb+srv://dbUserGabriel:Ripicsuje123@cluster0.cjuen.mongodb.net/my-site?retryWrites=true&w=majority');
		} catch (e) {
			res.status(500).json({ message: 'No connection!' });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (e) {
			client.close();
			res.status(500).json({ message: 'Storing message failed!' });
			return;
		}

		client.close();

		res.status(201).json({ message: 'Message successfully stored!', message: newMessage });
	}
}

export default handler;
