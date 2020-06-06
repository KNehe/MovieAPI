import { gql} from 'apollo-server-express';

export default gql `
type Query{
    getAllmovies: [Movie!]!
    getMovieById(id: ID!):Movie!
}

type Mutation{
    createMovie(title:String!,genre:String!):Movie!
    deleteMovie(id :ID! ):[Movie!]!
}

type Movie{
    id:ID
    title:String
    genre:String
}


`;
