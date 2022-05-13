import connection from './connection';
import IProduct from '../interfaces/productInterface';

export default class UserModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as IProduct[];
  };
}
