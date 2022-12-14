import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/productInterface';

export default class UserModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as IProduct[];
  };

  public postProduct = async (products: IProduct): Promise<IProduct> => {
    const { name, amount } = products;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: result[0].insertId, name, amount };
  };
}