import Order from '../interfaces/Order';
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
};

export default orderModel;
