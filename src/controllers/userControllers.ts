import { Request, Response } from 'express';
import UserService from '../services/userServices';
import Token from '../externals/tokenJWT';

export default class UserController {
  public service = new UserService();

  public token = new Token();

  public postUser = async (req: Request, res: Response):
  Promise<Response | void> => {
    const { username, classe, level, password } = req.body;
    try {
      const user = await this.service.postUser({ username, classe, level, password });
      const createToken = await this.token.createToken(user);
      return res.status(201).json({ token: createToken });
    } catch (err) {
      return res.status(500).json({ message: 'algo inesperado ocorreu' });
    }  
  };
}