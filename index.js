const express = require('express');
const {  ApolloServer , gql  } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const Movie  = require('./movie.js');

const PORT = process.env.PORT || 3000;

const movies = [
    {
        id: 1, 
        title:"Men in black",
        genre:"Action"
    }
    , {
        id: 2, 
        title:"Young Sheldon",
        genre:"Comedy"
    },
    {
        id: 3, 
        title:"Blacklist",
        genre:"Drama"
    }

];
const Query = `
type Query{
    movies: [Movie!]!
    movie(id: ID!):Movie!
}

type Mutation{
    createMovie(title:String!,genre:String!):Movie!
    deleteMovie(id :ID! ):[Movie!]!
}

`;

const resolvers = {
    Query: {
        movies: ()=> movies,
        movie: ( parent,{ id }) =>{

           let movie = {};

           movies.forEach( e=> {
               if(e.id == id){
                   movie = e;
               }
           });
           return movie;
        }
    },

    Mutation: {
        createMovie : ( parent, {title , genre})=>{
            let id = movies.length + 1;
          return  {id, title, genre};
        },
        deleteMovie : (parent, {id }) =>{

            const movie = movies.findIndex( movie => movie.id === id );
            movies.splice(movie,1);
            return movies;
        }
    }
};

const app = express();
const schema = makeExecutableSchema({ typeDefs:[ Query , Movie ],resolvers:{ resolvers}})
const server = new ApolloServer({ schema});

server.applyMiddleware({ app });

app.listen( PORT ,()=>{
    console.log(`Server running on port ${PORT} ...`);
});