import express from 'express';
import schema from './schema/schema';
import resolvers from './resolvers/resolvers';
import getAuthData  from './security/getAuthData';

const {  ApolloServer  } = require('apollo-server-express');

const apolloConfig = {
    introspection: true,
    playground: true,
    typeDefs: schema,
    resolvers,
    context : async ( { req }) =>{
      const { userRole , isLoggedIn } = await getAuthData(req);
      return{
        role : userRole,
        isLoggedIn
      }
    }
  };

const PORT = process.env.PORT || 3000;

const app = express();

const server = new ApolloServer( apolloConfig );

server.applyMiddleware({ app });

app.listen( PORT ,()=>{
    console.log(`Server running on port ${PORT} ...`);
});