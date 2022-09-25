import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Login from '../interfaces/Login';
import loginService from '../services/loginService';

const loginController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body as Login;

    const { message, token } = await loginService.login({ username, password });
  
    if (message) return res.status(StatusCodes.UNAUTHORIZED).json({ message });

    return res.status(StatusCodes.OK).json({ token });
  },
};  

export default loginController;