import Login from '../interfaces/Login';
import userModel from '../models/usersModel';

import jwtService from './jwtService';

const loginService = {
  login: async ({ username, password }: Login) => {
    if (!username || !password) {
      return { code: 400, message: 'Some required fields are missing' };
    }
    
    const loginData = await userModel.getByUsername(username);
    if (!loginData || loginData.password !== password) {
      return { message: 'Username or password invalid' };
    }
   
    const token = jwtService.generateTokenLogin(loginData);
    return { token };
  },

};

export default loginService;
