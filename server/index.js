import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/login.js';
import createRouter from './routes/createuser.js';
import connectToMongoDb from './db/setup.js';

dotenv.config().parsed;
const app = express();
const port = process.env.PORT || 5000;
const frontendUrl = process.env.FRONTEND_URL;

// CORS config
app.use(
	cors({
		origin: frontendUrl,
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type'],
	})
);

// middleware
app.use(express.json());

// routes
app.use('/login', userRouter);
app.use('/createuser', createRouter);

// db connection
connectToMongoDb();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
