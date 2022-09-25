import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Login from '../interfaces/Login';

import loginModel from '../models/loginModel';
import jwtService from './jwtService';

const loginService = {
  login: async (_req: Request, res: Response, login: Login) => {
    const loginData = await loginModel.login(login);
    if (!loginData || loginData.password !== login.password) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
    const token = jwtService.generateToken(loginData);
    return { token };
  },

};

export default loginService;
