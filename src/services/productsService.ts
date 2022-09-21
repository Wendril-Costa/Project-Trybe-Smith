import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import { Product } from '../interfaces/index';

class BookService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default BookService;