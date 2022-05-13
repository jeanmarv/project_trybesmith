import express from 'express';
import ProductRoute from './Routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);

export default app;
