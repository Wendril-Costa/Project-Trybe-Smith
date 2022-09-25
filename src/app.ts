import express from 'express';

import productsController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAll);

app.post('/users', userController.create);

app.get('/orders', orderController.getAll);

// app.post('/login', loginController.login);

export default app;