import mongoose from 'mongoose';

const db = process.env.MONGO_URI;
async function connectToMongoDb() {
	try {
		await mongoose.connect(db);
		console.log('Connection to MongoDB was sucessfull!');
	} catch (error) {
		console.error('Error occured when trying to connect to MongoDB', error);
	}
}

export { connectToMongoDb };
