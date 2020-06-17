import { gql} from 'apollo-server-express';

export default gql `
type Query{
    getAllmovies: [Movie!]!
    getMovieById(id: ID!):Movie!
    findAllActors: [Actor!]!
}

type Mutation{
    createMovie(data: CreateMovieInput!):CreateMovieOutput!
    deleteMovie(id :ID! ):[Movie!]!
    registerUser(data: UserRegInput!): UserRegOutput!
    login( data: LoginInput! ): LoginOutput!
    createActor( data: CreateActorInput! ): CreateActorOuput!
    deleteUser(id: Int): String!
}

input CreateMovieInput{
    title:String
    genre:String
    video_url:String
    actors: [MovieActorInput]
}

type CreateMovieOutput{
    id:ID
    title:String
    genre:String
    video_url:String
    actors:[MovieActorOuput]
}

input MovieActorInput{
    first_name:String
    last_name:String
}

type MovieActorOuput{
    first_name:String
    last_name:String
}
type Movie{
    id:ID
    title:String
    genre:String
    video_url:String
    actors: [MovieActorOuput]
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
    role:String
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

input CreateActorInput{
    first_name:String
    last_name:String
}

type CreateActorOuput{
    first_name:String
    last_name:String
}

type Actor{
    first_name:String
    last_name:String
    movies: [Movie]
}


`;
