import express from 'express';

import productsController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import loginController from './controllers/loginController';
import validateLogin from './middlewares/validateLogin';
import validateName from './middlewares/validateName';
import validateAmount from './middlewares/validateAmount';
import validateUsername from './middlewares/validateUsername';
import validateClasse from './middlewares/validateClasse';
import validateLevel from './middlewares/validateLevel';
import validatePassword from './middlewares/validatePassword';
import validateProductsId from './middlewares/validateProdutsId';
import jwtService from './services/jwtService';

const app = express();

app.use(express.json());

app.post(
  '/login', 
  validateLogin, 
  loginController.login,
);

app.post(
  '/products', 
  validateName, 
  validateAmount, 
  productsController.create,
);

app.get(
  '/products', 
  productsController.getAll,
);

app.post(
  '/users', 
  validateUsername, 
  validateClasse,
  validateLevel,
  validatePassword,
  userController.create,
);

app.get(
  '/orders', 
  orderController.getAll,
);

app.post(
  '/orders', 
  jwtService.validateToken, 
  validateProductsId, 
  orderController.create,
);

export default app;