import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../interfaces/User';

export default function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body as User;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"username" is required' });
  }
  
  if (typeof username !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" must be a string' });
  }

  if (username.length < 3) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  next();
}
