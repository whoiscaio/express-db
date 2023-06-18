import query from '../database';

class ProductRepository {
  async getAll() {
    const products = await query('SELECT * FROM products');

    return products;
  }
}

export default new ProductRepository();