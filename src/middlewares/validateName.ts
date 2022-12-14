import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/Product';

export default function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body as Product;

  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"name" is required' });
  }
  
  if (typeof name !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" must be a string' });
  }

  if (name.length < 2) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
}
