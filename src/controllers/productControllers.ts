import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productServices';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };
}