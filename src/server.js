import express from 'express';
import schema from './schema/schema';
import resolvers from './resolvers/resolvers';

const {  ApolloServer  } = require('apollo-server-express');

const apolloConfig = {
    introspection: true,
    playground: true,
    typeDefs: schema,
    resolvers
  };

const PORT = process.env.PORT || 3000;

const app = express();

const server = new ApolloServer( apolloConfig );

server.applyMiddleware({ app });

app.listen( PORT ,()=>{
    console.log(`Server running on port ${PORT} ...`);
});