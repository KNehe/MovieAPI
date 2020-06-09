import MovieController from './../controllers/movieController';

export default {
    Query: {
        getAllmovies: ()=> MovieController.getAllMovies(),

        getMovieById: ( parent,{ id }) => MovieController.getMovieById(id)
    },

    Mutation: {
        createMovie : async ( parent, {title , genre})=> await MovieController.createMovie( title , genre),

        deleteMovie : (parent, {id }) => MovieController.deleteMovie( id )
    }
};