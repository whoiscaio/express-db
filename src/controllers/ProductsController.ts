import { Request, Response } from 'express';
import ProductRepository from '../repository/ProductRepository';

class ProductsController {
  async index(request: Request, response: Response) {
    const products = await ProductRepository.getAll();

    response.json(products);
  }
}

export default new ProductsController();
