import { Request, Response } from 'express';
import ProductRepository from '../repository/ProductRepository';

class ProductsController {
  async index(request: Request, response: Response) {
    const products = await ProductRepository.getAll();

    response.json(products);
  }

  async find(request: Request, response: Response) {
    const { id } = request.params;

    if (!/^\d+$/.test(id)) {
      return response.status(400).json({ message: 'Invalid id provided' });
    }

    const product = await ProductRepository.findById(Number(id));

    if (!product) {
      return response.status(404).json({ message: 'Product not found' });
    }

    return response.json(product);
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

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, price } = request.body;

    if (!/^\d+$/.test(id)) {
      return response.status(400).json({ message: 'Invalid id provided' });
    }

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

    const updatedProduct = await ProductRepository.update(Number(id), {
      name,
      price,
    });

    response.json(updatedProduct);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    if (!/^\d+$/.test(id)) {
      return response.status(400).json({ message: 'Invalid id provided' });
    }

    await ProductRepository.delete(Number(id));

    response.sendStatus(200);
  }
}

export default new ProductsController();
