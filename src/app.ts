import express from 'express';

import ProductsController from './controllers/productsController';

const productsController = new ProductsController();

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.getAll);

export default app;