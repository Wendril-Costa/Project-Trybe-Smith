import express from 'express';

import ProductsController from './controllers/productsController';

const productsController = new ProductsController();

const app = express();

app.use(express.json());

app.post('/products', productsController.create);

export default app;