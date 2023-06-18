import { Request, Response } from 'express';
import ProductRepository from '../repository/ProductRepository';

class ProductsController {
  async index(request: Request, response: Response) {
    const products = await ProductRepository.getAll();

    response.json(products);
  }

  async create(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name) {
      return response
        .status(400)
        .json({ message: 'Property name is required' });
    }

    if (!price) {
      return response
        .status(400)
        .json({ message: 'Property price is required' });
    }

    const newProduct = { name, price };

    const product = await ProductRepository.create(newProduct);

    response.status(201).json(product);
  }
}

export default new ProductsController();
