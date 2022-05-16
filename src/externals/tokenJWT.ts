import jwt from 'jsonwebtoken';

export default class Token {
  public createToken = (user: object): string => {
    const token = jwt.sign({ user }, '123456', { expiresIn: '60min' });
    return token;
  };
}