import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config().parsed;
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

mongoose
	.connect(db)
	.then(() => console.log('Connected to MongoDB!'))
	.catch((err) => console.error('Failed to connect to MongoDB:', err));

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
