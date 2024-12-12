import bcrypt from 'bcrypt';
import User from '../models/User.js';

// hashing the password for account creation
async function encryptPassword(plaintextPassword, saltRounds) {
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(plaintextPassword, salt);
		return hash;
	} catch (err) {
		throw new Error('Error hashing password');
	}
}

// checking for passwordmatch on login
async function isPasswordMatch(plaintextPassword, email) {
	try {
		const user = await User.findOne({ email });
		if (!user) return false;
		const result = await bcrypt.compare(plaintextPassword, user.password);
		return result;
	} catch (error) {
		throw new Error('Invalid password!');
	}
}

export { encryptPassword, isPasswordMatch };
