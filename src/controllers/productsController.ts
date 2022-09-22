import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import productService from '../services/productsService';

const productController = {
  create: async (req: Request, res: Response) => {
    const product = req.body;
    
    const productCreated = await productService.create(product);
    return res.status(StatusCodes.CREATED).json(productCreated);
  },

  getAll: async (_req: Request, res: Response) => {
    const products = await productService.getAll();
    return res.status(StatusCodes.OK).json(products);
  },
};

export default productController;
