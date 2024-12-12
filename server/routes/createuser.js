import express from 'express';
import User from '../models/User.js';
import { encryptPassword } from '../utils/helpers.js';
const router = express.Router();

// Route to create a user
router.post('/', async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ msg: 'Email already in use.' });
		}

		const saltRounds = 10;
		const hash = await encryptPassword(password, saltRounds);

		const newUser = new User({
			firstName,
			lastName,
			email,
			password: hash,
		});
		await newUser.save();

		res.status(201).json({ msg: 'User created successfully!' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: 'Error creating user.' });
	}
});

router.get('/', async (req, res) => {
	const user = await User.find({});
	res.send(user);
});

export default router;
