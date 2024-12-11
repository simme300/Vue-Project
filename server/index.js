import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/login.js';
import createRouter from './routes/createuser.js';

dotenv.config().parsed;
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

// CORS config
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type'],
	})
);

// middleware
app.use(express.json());

app.use('/login', userRouter);
app.use('/createuser', createRouter);

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
