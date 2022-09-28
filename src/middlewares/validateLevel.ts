import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../interfaces/User';

export default function validateLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body as User;

  if (level === undefined) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"level" is required' });
  }

  if (typeof level !== 'number') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be a number' });
  }

  if (level < 1) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
}
