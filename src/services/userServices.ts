import UserModel from '../models/userModels';
import IUser from '../interfaces/userInterface';

export default class UserService {
  public model = new UserModel();

  public postUser = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;
    const newUser = await this.model.postUser({ username, classe, level, password });
    return newUser;
  };
}