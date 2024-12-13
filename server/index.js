import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/login.js';
import createRouter from './routes/createuser.js';
import { connectToMongoDb } from './db/setup.js';
import { insertCategories, findAllCategories } from './db/createCategories.js';

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

app.get('/', async (req, res) => {
	try {
		const categories = await findAllCategories();
		if (!categories) {
			categories = await insertCategories();
		}
		res.json(categories);
	} catch (error) {
		res.status(500).send('Error retrieving categories');
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
