import { ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/Order';
import ProductsOrder from '../interfaces/ProductOrder';
import connection from './connection';

const orderModel = {
  getAll: async (): Promise<Order[]> => {
    const query = `
    SELECT
        o.id,
        o.userId,
        JSON_ARRAYAGG(p.id) AS productsIds 
    FROM
        Trybesmith.Orders AS o 
    INNER JOIN
        Trybesmith.Products AS p 
        ON o.id = p.orderId 
    GROUP BY
        o.id 
    ORDER BY
        o.userId;`;

    const result = await connection.execute(query);

    const [rows] = result;
    
    return rows as Order[];
  },

  create: async ({ productsIds, id }: ProductsOrder) => {
    if (Array.isArray(productsIds)) {
      productsIds.forEach(async (productsId) => {
        const [dataInserted] = await connection.execute<ResultSetHeader>(`
          INSERT INTO Trybesmith.Orders(userId) VALUES (?)`, [id]);

        const { insertId } = dataInserted;

        await connection.execute<ResultSetHeader>(`
          UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;`, [insertId, productsId]);
      });

      return { userId: id, productsIds };
    }  
  },
};

export default orderModel;
