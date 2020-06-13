import { gql} from 'apollo-server-express';

export default gql `
type Query{
    getAllmovies: [Movie!]!
    getMovieById(id: ID!):Movie!
}

type Mutation{
    createMovie(data:MovieInput!):Movie!
    deleteMovie(id :ID! ):[Movie!]!
}

type Movie{
    id:ID
    title:String
    genre:String
}

input MovieInput{
    title:String
    genre:String
    author_id:Int
}


`;
