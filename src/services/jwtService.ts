import { sign } from 'jsonwebtoken';

const SECRET = 'senhaincrivel';

const jwtService = {
  generateToken: (id: number) => {
    const token = sign({ id }, SECRET, {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
        
    return token;
  },
};

export default jwtService;