import { sign } from 'jsonwebtoken';

import User from '../interfaces/User';

const SECRET = 'senhaincrivel';

const jwtService = {
  generateToken: (id: User) => {
    const token = sign({ id }, SECRET, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
        
    return token;
  },
};

export default jwtService;