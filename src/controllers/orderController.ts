import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import orderService from '../services/orderService';

const orderController = {
  getAll: async (_req: Request, res: Response) => {
    const orders = await orderService.getAll();
    return res.status(StatusCodes.OK).json(orders);
  },
};

export default orderController;
