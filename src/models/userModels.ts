import { ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';
import connection from './connection';

export default class UserModel {
  public postUser = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: result[0].insertId, username, classe, level, password };
  };
}