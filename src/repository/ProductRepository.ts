class ProductRepository {
  private products = []

  getAll() {
    return this.products;
  }
}

export default new ProductRepository();