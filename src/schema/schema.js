import { gql} from 'apollo-server-express';

export default gql `
type Query{
    getAllmovies: [Movie!]!
    getMovieById(id: ID!):Movie!
}

type Mutation{
    createMovie(data:MovieInput!):Movie!
    deleteMovie(id :ID! ):[Movie!]!
    registerUser(data: UserRegInput!): UserRegOutput!
    login( data: LoginInput! ): LoginOutput!
}

type Movie{
    id:ID
    title:String
    genre:String
    video_url:String
}

input MovieInput{
    title:String
    genre:String
    video_url:String
    author_id:Int
}

input UserRegInput{
    first_name:String
    last_name:String
    email:String
    password:String
}

type UserRegOutput{
    first_name:String
    last_name:String
    email:String
    token:String
}

input LoginInput{
    email:String
    password:String
}

type LoginOutput{
    first_name:String
    last_name:String
    email:String
    token:String
}


`;
