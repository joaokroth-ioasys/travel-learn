import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export const hashPassword = (plain) => bcrypt.hash(plain, 10);
export const verifyPassword = (plain, hash) => bcrypt.compare(plain, hash);
export const signToken = (userId) => jwt.sign({ sub: userId }, SECRET, { expiresIn: '30d' });

// Serverless functions can't share Express middleware, so each protected
// handler calls this and 401s on null. Returns the user id or null.
export function getUserId(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token || !SECRET) return null;
  try {
    return jwt.verify(token, SECRET).sub;
  } catch {
    return null;
  }
}
