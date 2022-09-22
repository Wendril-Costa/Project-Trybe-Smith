import { ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product';
import connection from './connection';

const productModel = {
  create: async (product: Product): Promise<Product> => {
    const { name, amount } = product;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  },

  getAll: async (): Promise<Product[]> => {
    const result = await connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  },
};

export default productModel;
