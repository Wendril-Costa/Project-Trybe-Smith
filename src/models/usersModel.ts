import { ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User';
import connection from './connection';

const userModel = {
  create: async (user: User): Promise<User> => {
    const { username, classe, level, password } = user;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  },

};

export default userModel;