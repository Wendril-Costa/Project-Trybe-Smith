import userModel from '../models/usersModel';
import User from '../interfaces/User';
import jwtService from './jwtService';

const UserService = {
  create: async (user: User) => {
    const userCreated = await userModel.create(user);

    const token = jwtService.generateTokenLogin(userCreated);
    
    return { token };
  }, 
};
  
export default UserService;
