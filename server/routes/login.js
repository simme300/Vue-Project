import express from 'express';
import User from '../models/User.js';
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Working');
});

router.post('/', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ msg: 'You must enter a valid email and password to login!' });
		}

		const findUser = await User.findOne({ email });
		if (!findUser) {
			return res
				.status(400)
				.json({ msg: 'There is no user associated with this email!' });
		}

		return res.redirect('(/');
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: 'An error occurred while logging in.' });
	}
});

export default router;
