import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IJoin from '../interfaces/orderInterface';

export default class OrderModel {
  public getAll = async (): Promise<IJoin[]> => {
    const query = `SELECT ord.id, ord.userId, prod.id as productsIds
    FROM Trybesmith.Orders as ord
    INNER JOIN Trybesmith.Products as prod
    ON ord.id = prod.orderId;`;
    const [order] = await connection.execute<RowDataPacket[]>(query);
    return order.map((orders) => 
      ({ id: orders.id, userId: orders.userId, productsIds: [orders.productsIds] })) as IJoin[];
  };
}