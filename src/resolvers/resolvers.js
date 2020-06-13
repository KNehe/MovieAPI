import MovieController from './../controllers/movieController';

export default {
    Query: {
        getAllmovies: async ( parent )=> await MovieController.getAllMovies(),

        getMovieById: async ( parent,{ id }) => await MovieController.getMovieById(id)
    },

    Mutation: {
        createMovie : async ( parent, {data})=> {
            await MovieController.createMovie(data)
        },

        deleteMovie : async (parent, {id }) => await MovieController.deleteMovie( id )
    }
};