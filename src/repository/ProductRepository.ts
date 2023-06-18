import db from '../database';
import { IProduct } from '../interfaces/IProduct';

class ProductRepository {
  async getAll() {
    const products = await db.query('SELECT * FROM products');

    return products;
  }

  async findById(id: number) {
    const [product] = await db.query('SELECT * FROM products WHERE id=$1', [id]);

    return product;
  }

  async create(product: IProduct) {
    const { name, price } = product;

    const [newProduct] = await db.query(`
    INSERT INTO products(name, price)
    VALUES($1, $2)
    RETURNING *
  `, [name, price]);

    return newProduct;
  }
}

export default new ProductRepository();