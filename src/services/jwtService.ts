import { sign } from 'jsonwebtoken';
import Login from '../interfaces/Login';
import User from '../interfaces/User';

// import User from '../interfaces/User';

const SECRET = 'senhaincrivel';

const jwtService = {
  generateToken: (payload: User | Login): string => {
    const token = sign(payload, SECRET, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
        
    return token;
  },
};

export default jwtService;
