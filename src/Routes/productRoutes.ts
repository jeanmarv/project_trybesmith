import { Router } from 'express';
import ProductController from '../controllers/productControllers';

const productcontroller = new ProductController();

const route = Router();

route.get('/', productcontroller.getAll);

export default route; 
