import OrderModel from '../models/orderModels';
import IJoin from '../interfaces/orderInterface';

export default class OrderService {
  public model = new OrderModel();

  public getAll = async (): Promise<IJoin[]> => {
    const allOrders = await this.model.getAll();
    return allOrders;
  };
}