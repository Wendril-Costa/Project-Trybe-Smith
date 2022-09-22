import { sign } from 'jsonwebtoken';

import User from '../interfaces/User';

const SECRET = 'senhaincrivel';

const jwtService = {
  generateToken: (payload: User) => {
    const token = sign(payload, SECRET, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
        
    return token;
  },
};

export default jwtService;
