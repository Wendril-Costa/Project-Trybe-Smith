import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Login from '../interfaces/Login';
// import CustomError from './CustomError';

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as Login;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"password" is required' });
  }

  next();
}