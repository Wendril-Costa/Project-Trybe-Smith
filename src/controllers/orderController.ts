import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import orderService from '../services/orderService';
import { NewRequest } from '../services/jwtService';

const orderController = {
  getAll: async (_req: Request, res: Response) => {
    const orders = await orderService.getAll();

    return res.status(StatusCodes.OK).json(orders);
  },

  create: async (req: NewRequest, res: Response) => {
    const id = req.user;
    const { productsIds } = req.body;

    if (id) {
      try {
        const data = await orderService.create({ id, productsIds });
        return res.status(StatusCodes.CREATED).json(data);
      } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
      }
    }
  },
};

export default orderController;
