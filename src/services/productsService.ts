import connection from '../models/connection';

import ProductsModel from '../models/productsModel';
import Product from '../interfaces/Product';

export default class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create(product: Product): Promise<Product> {
    const productCreated = this.model.create(product);
    return productCreated;
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}
