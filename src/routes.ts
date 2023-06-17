import { Router } from 'express';
import ProductsController from './controllers/ProductsController';

const router = Router();

router.route('/products').get(ProductsController.index);

export default router;
