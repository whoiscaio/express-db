import { Request, Response } from 'express';
import ProductRepository from '../repository/ProductRepository';

class ProductsController {
  index(request: Request, response: Response) {
    const products = ProductRepository.getAll();

    response.json(products);
  }
}

export default new ProductsController();
