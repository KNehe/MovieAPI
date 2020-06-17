import MovieController from './../controllers/movieController';
import UserController from './../controllers/userController';
import ActorController from './../controllers/actorController';
import resctrictAccess from './../security/restrictAccess';

export default {
    Query: {
        getAllmovies: async ( parent, args, { role , isLoggedIn } )=>{

            resctrictAccess(['admin', 'user'], role, isLoggedIn);

            return await MovieController.getAllMovies();
        },

        getMovieById: async ( parent,{ id }, { role , isLoggedIn }) =>{

            resctrictAccess(['admin', 'user'], role, isLoggedIn);

            return await MovieController.getMovieById(id);
        },

        findAllActors: async ( parent, args, { role , isLoggedIn } ) =>{
             
            resctrictAccess(['admin', 'user'], role, isLoggedIn);

            return await ActorController.findAllActors();
        }
    },

    Mutation: {
        createMovie : async ( parent, { data } , { role, isLoggedIn } )=> {

            resctrictAccess(['admin'], role, isLoggedIn);

            return await MovieController.createMovie(data);
        },

        deleteMovie : async (parent, { id }, { role, isLoggedIn } ) =>{

            resctrictAccess(['admin'], role, isLoggedIn);

            return await MovieController.deleteMovie( id );

        },

        registerUser: async (parent, { data }) => await UserController.registerUser(data),

        login: async (parent, { data }) => await UserController.login( data ),

        createActor: async ( parent, { data }, { role, isLoggedIn } ) =>{

            resctrictAccess(['admin'], role, isLoggedIn);

            return await ActorController.createActor( data );
        },

        deleteUser: async ( parent, { id }, { role, isLoggedIn }) =>{

             resctrictAccess(['admin'], role, isLoggedIn);
             
             return await UserController.deleteUser(id);
        }
    }
};