import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/index';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(book: Product): Promise<Product> {
    const { name, amount } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}