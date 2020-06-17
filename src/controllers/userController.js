import User from './../database/Models/user';
import PasswordUtils from './../utils/passwordUtils';
import TokenUtils from './../utils/tokenUtils';
import  { ApolloError } from 'apollo-server-express';


const registerUser = async ( data ) =>{
    
    const { first_name, last_name, email} = data;

    const foundUser = await User.findOne({ where: { email } });

    if(foundUser){
        throw new ApolloError(`Account with email '${email}' already exists`, '400');
    }

    const password = await PasswordUtils.hash(data.password);

    const user = { first_name, last_name, email, role:'user', password };

    const token = TokenUtils.generateToken(email);

    const newUser = await User.create({ ...user });

    if(!newUser){
        throw new ApolloError('Registration failed, Try again', '500');
    }

    return { first_name, last_name, email , role, token };

};

const login = async ( data ) =>{
    
    const { email , password } = data;

    const foundUser = await User.findOne({ where: { email } });

    if(!foundUser){
        throw new ApolloError('Wrong email or password', '401');
    }

    if(! await PasswordUtils.compare(password, foundUser.password )){
        throw new ApolloError('Wrong email or password', '401');
    }
    
    const { first_name, last_name } = foundUser;

    const token = TokenUtils.generateToken(email);

    return { first_name, last_name, email, token };

};

const deleteUser = async ( id ) =>{

    const foundUser = await User.findOne({ where: { id } });

    if(!foundUser){
        throw new ApolloError(`User with id '${id}' not found`, '404');
    }

    await User.destroy({ where: {id}});

    return `User with id ${id} deleted successfully`;

};




export default { registerUser , login, deleteUser };