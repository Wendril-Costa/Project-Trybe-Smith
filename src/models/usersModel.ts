import { ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User';
import connection from './connection';

const userModel = {
  create: async (user: User): Promise<User> => {
    const { username, classe, level, password } = user;

    const [dataInserted] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)
    `, [username, classe, level, password]);

    const { insertId: id } = dataInserted;
    
    return { id, ...user } as User;
  },

  getByUsername: async (username: string): Promise<User> => {
    const [data] = await connection.execute(`
    SELECT * FROM Trybesmith.Users WHERE username = ?`, [username]);

    const [user] = data as User[];
  
    return user;
  },

  getByUserId: async (userId: number) => {
    const [data] = await connection.execute(`
    SELECT * FROM Trybesmith.Users WHERE username = ?`, [userId]);
    
    const [user] = data as User[];
  
    return user;
  },

};

export default userModel;