import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export default function validateProductsId(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length < 1) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must include only numbers' });
  }

  next();
}
