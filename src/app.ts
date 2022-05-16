import express from 'express';
import ProductRoute from './Routes/productRoutes';
import UserRoute from './Routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);
app.use('/users', UserRoute);

export default app;
