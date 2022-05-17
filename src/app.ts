import express from 'express';
import ProductRoute from './Routes/productRoutes';
import UserRoute from './Routes/userRoutes';
import OrderRoute from './Routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);
app.use('/users', UserRoute);
app.use('/orders', OrderRoute);

export default app;
