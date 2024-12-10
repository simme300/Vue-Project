import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/login.js';

dotenv.config().parsed;
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use('/login', userRouter);

async function connectToMongoDb() {
	try {
		await mongoose.connect(db);
		console.log('Connection to MongoDB was sucessfull!');
	} catch (error) {
		console.error('Error occured when trying to connect to MongoDB', error);
	}
}

connectToMongoDb();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
