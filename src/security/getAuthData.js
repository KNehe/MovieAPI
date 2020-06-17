import TokenUtils from '../utils/tokenUtils';
import User from '../database/Models/user';
import { ApolloError} from 'apollo-server-express';

const getAuthData = async (req) =>{

    const authorization = req.headers.authorization || '';

    let token = authorization.split(' ')[1] || '';
    
    let userRole = '';

    let isLoggedIn = '';

    if(authorization){

        const { email , error } = TokenUtils.decodeToken(token);
      
        if(error){
            throw new ApolloError(error.message, '401')
        }

        const user = await User.findOne({ where: { email }});

        const { role } = user;

        userRole = role;

        isLoggedIn = true;

    }else{

        isLoggedIn = false;
    }

    return { userRole, isLoggedIn };

};

export default getAuthData;