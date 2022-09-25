import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import loginService from '../services/orderService';

const loginController = {
  login: async (req: Request, res: Response) => {
    const userCredentials = req.body;
    const login = await loginService.login(userCredentials);
  
    return res.status(StatusCodes.OK).json(login);
  },
};  

export default loginController;