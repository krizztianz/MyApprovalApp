// repositories/userRepository.js
import bcrypt from 'bcryptjs';
import { connectToDB } from '../config/db.js';

class UserRepository {
  async findByEmail(email) {
    const pool = await connectToDB();
    const result = await pool
      .request()
      .input('email', email)
      .query('SELECT * FROM Users WHERE email = @email');
    return result.recordset[0];
  }

  async createUser(user) {
    const pool = await connectToDB();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await pool
      .request()
      .input('email', user.email)
      .input('password', hashedPassword)
      .query('INSERT INTO Users (email, password) VALUES (@email, @password)');
  }
}

export default new UserRepository();