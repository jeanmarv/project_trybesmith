import { Router } from 'express';
import OrderController from '../controllers/orderControllers';

const orderController = new OrderController();

const route = Router();

route.get('/', orderController.getAll);

export default route; 