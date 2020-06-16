import MovieController from './../controllers/movieController';
import UserController from './../controllers/userController';
import ActorController from './../controllers/actorController';

export default {
    Query: {
        getAllmovies: async ( parent )=> await MovieController.getAllMovies(),

        getMovieById: async ( parent,{ id }) => await MovieController.getMovieById(id),

        findAllActors: async ( parent) => await ActorController.findAllActors()
    },

    Mutation: {
        createMovie : async ( parent, { data } )=> await MovieController.createMovie(data),

        deleteMovie : async (parent, { id }) => await MovieController.deleteMovie( id ),

        registerUser: async (parent, { data }) => await UserController.registerUser(data),

        login: async (parent, { data }) => await UserController.login( data ),

        createActor: async ( parent, { data }) => await ActorController.createActor( data )
    }
};