import { Request, Response } from 'express';
import OrderService from '../services/orderServices';

export default class OrderController {
  public service = new OrderService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const allOrders = await this.service.getAll();
    return res.status(200).json(allOrders);
  };
}