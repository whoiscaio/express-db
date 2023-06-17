import { Router } from 'express';

const router = Router();

router.route('/products').get((req, res) => {
  res.send('Test');
});

export default router;
