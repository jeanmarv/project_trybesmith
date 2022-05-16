import { Request, Response } from 'express';
import ProductService from '../services/productServices';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const products = await this.service.getAll();
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json({ message: 'algo inesperado ocorreu' });
    }  
  };

  public postProduct = async (req: Request, res: Response):
  Promise<Response | void> => {
    const { name, amount } = req.body;
    try {
      const product = await this.service.postProduct({ name, amount });
      return res.status(201).json(product);
    } catch (err) {
      return res.status(500).json({ message: 'algo inesperado ocorreu' });
    }  
  };
}