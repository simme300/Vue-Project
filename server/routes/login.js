import express from 'express';
import { isPasswordMatch } from '../utils/helpers.js';
const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (isPasswordMatch(password, email))
			return res.status(201).json({ msg: 'Login successfull!' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: 'An error occurred while logging in.' });
	}
});

export default router;
