import express from 'express';

import productsController from './controllers/productsController';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAll);
app.post('/users', userController.create);

export default app;