import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		if (!email || !email.includes('@')) {
			res.status(422).json({ message: 'Invalid email!' });
			return;
		}

		let client;

		try {
			client = await connectDatabase();
		} catch (e) {
			res.status(500).json({ message: 'Connecting to the database failed!' });
			return;
		}

		try {
			await insertDocument(client, { email: email }, 'newsletter');
			client.close();
		} catch (e) {
			res.status(500).json({ message: 'Insertion failed!' });
			return;
		}

		res.status(201).json({ message: 'Signed Up!' });
	}
}

export default handler;
