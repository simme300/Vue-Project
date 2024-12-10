import express from 'express';
export const userRouter = express.Router();

router.get('/', (req, res) => {
	res.send('Working');
});
