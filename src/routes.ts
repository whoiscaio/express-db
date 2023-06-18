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
    .put(ProductsController.update)
    .delete(ProductsController.delete)

export default router;
