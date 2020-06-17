import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (email) =>{

    return jwt.sign({email}, process.env.JWT_SECRET, { expiresIn: '1h' });

};

const decodeToken = ( token ) =>{

    try {

        return jwt.verify(token, process.env.JWT_SECRET);

    }catch (error) {

        return {error};

    }

};

export default { generateToken , decodeToken};