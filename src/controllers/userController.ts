import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/userService';

const userController = {
  create: async (req: Request, res: Response) => {
    const product = req.body;
    
    const productCreated = await userService.create(product);

    return res.status(StatusCodes.CREATED).json(productCreated);
  },

};

export default userController;
