import { ApolloError } from 'apollo-server-express';

const restrictAccess = ( exceptedRoles, actualRole, isLogged ) => {

    if(!isLogged){
        throw new ApolloError('You are not logged in','401');
    }

    if(!exceptedRoles.includes(actualRole)){
        throw new ApolloError('You do not have permission to access this resource','401');
    }

};

export default restrictAccess;