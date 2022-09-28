import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sign, verify } from 'jsonwebtoken';
import User from '../interfaces/User';

const SECRET = 'senhaincrivel';

export type NewRequest = { user?: number } & Request;

const jwtService = {
  generateTokenLogin: ({ username, id }: User) => {
    const data = { username, id };

    const token = sign(data, SECRET, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
        
    return token;
  },

  validateToken: async (req: NewRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    
    try {
      const data = verify(token, SECRET);

      if (typeof data !== 'string') {
        const { id } = data;

        req.user = id;
        next();
      }
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    }
  },
};

export default jwtService;
