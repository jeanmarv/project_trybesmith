import ProductModel from '../models/productModels';
import IProduct from '../interfaces/productInterface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public postProduct = async (user: IProduct): Promise<IProduct> => {
    const { name, amount } = user;
    const postedProduct = await this.model.postProduct({ name, amount });
    return postedProduct;
  };
}