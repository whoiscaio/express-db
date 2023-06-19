import { PrismaClient } from '@prisma/client';
import { IProduct } from '../interfaces/IProduct';

const db = new PrismaClient();

class ProductRepository {
  async getAll() {
    const products = await db.product.findMany();

    return products;
  }

  async findById(id: number) {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async create(product: IProduct) {
    const { name, price } = product;

    const newProduct = await db.product.create({
      data: {
        name,
        price,
      },
    });

    return newProduct;
  }

  async update(id: number, product: IProduct) {
    const { name, price } = product;

    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        name,
        price,
      },
    });

    return updatedProduct;
  }

  async delete(id: number) {
    await db.product.delete({
      where: { id },
    });
  }
}

export default new ProductRepository();
