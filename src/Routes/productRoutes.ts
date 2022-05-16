import { Router } from 'express';
import ProductController from '../controllers/productControllers';
import ValidateProducts from '../middlewares/validateProducts';

const productcontroller = new ProductController();
const validateProducts = new ValidateProducts();

const route = Router();

route.get('/', productcontroller.getAll);
route.post(
  '/', 
  validateProducts.validateName,
  validateProducts.validateAmount, 
  productcontroller.postProduct,
);

export default route; 
