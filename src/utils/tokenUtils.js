import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (data) =>{

    return jwt.sign({ data: data}, process.env.JWT_SECRET, { expiresIn: '1h' });

};

export default { generateToken };