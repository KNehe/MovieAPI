import MovieController from './../controllers/movieController';

export default {
    Query: {
        getAllmovies: ()=> MovieController.getAllMovies(),

        getMovieById: ( parent,{ id }) => MovieController.getMovieById(id)
    },

    Mutation: {
        createMovie : ( parent, {title , genre})=> MovieController.createMovie( title , genre),

        deleteMovie : (parent, {id }) => MovieController.deleteMovie( id )
    }
};