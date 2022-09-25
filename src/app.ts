import express from 'express';

import productsController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import loginController from './controllers/loginController';
import validateLogin from './middlewares/validateLogin';

const app = express();

app.use(express.json());

app.post('/login', validateLogin, loginController.login);
app.post('/products', productsController.create);
app.get('/products', productsController.getAll);

app.post('/users', userController.create);

app.get('/orders', orderController.getAll);

export default app;