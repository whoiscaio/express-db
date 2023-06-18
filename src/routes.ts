import { Router } from 'express';
import ProductsController from './controllers/ProductsController';

const router = Router();

router
  .route('/products')
  .get(ProductsController.index)
  .post(ProductsController.create)

router
  .route('/products/:id')
    .get(ProductsController.find)

export default router;
