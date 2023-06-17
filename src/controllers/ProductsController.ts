import { Request, Response } from 'express';

class ProductsController {
  index(request: Request, response: Response) {
    response.json([]);
  }
}

export default new ProductsController();
