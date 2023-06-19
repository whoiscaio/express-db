import { PrismaClient } from '@prisma/client';
import { IProduct } from '../interfaces/IProduct';

const db = new PrismaClient();

class ProductRepository {
  async getAll() {
    const products = await db.products.findMany();

    return products;
  }

  async findById(id: number) {
    const product = await db.products.findUnique({
      where: {id}
    })

    return product;
  }

  async create(product: IProduct) {
    const newProduct = await db.products.create({
      data: product
    })

    return newProduct;
  }

  async update(id: number, product: IProduct) {
    const updatedProduct = await db.products.update({
      where: { id },
      data: product
    })

    return updatedProduct;
  }

  async delete(id: number) {
    await db.products.delete({
      where: { id }
    })
  }
}

export default new ProductRepository();
