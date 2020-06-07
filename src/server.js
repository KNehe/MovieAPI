import express from 'express';
import schema from './schema/schema';
import resolvers from './resolvers/resolvers';
import testDb from './database/config';

const {  ApolloServer  } = require('apollo-server-express');

const apolloConfig = {
    introspection: true,
    playground: true,
    typeDefs: schema,
    resolvers
  };

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer( apolloConfig );

server.applyMiddleware({ app });

testDb();

app.listen( PORT ,()=>{
    console.log(`Server running on port ${PORT} ...`);
});