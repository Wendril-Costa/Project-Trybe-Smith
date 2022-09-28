import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/userService';

const userController = {
  create: async (req: Request, res: Response) => {
    const user = req.body;
    
    const productCreated = await userService.create(user);

    return res.status(StatusCodes.CREATED).json(productCreated);
  },

};

export default userController;
