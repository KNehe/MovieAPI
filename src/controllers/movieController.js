import Movie from './../database/Models/movie';
import  { ApolloError } from 'apollo-server-express';

const getAllMovies =  async () =>{

    const movies =  await Movie.findAll();
    return movies;
};

const getMovieById =   async ( id) =>{

    const movie = await Movie.findOne({ where: { id} });

    const foundMovie = await Movie.findOne({ where: { id } });

    if(!foundMovie){
        throw new ApolloError(`Movie with id '${id}'  does not exist`, '400');
    }

    return movie;
};

const createMovie = async ( data ) => {
   
        const  { title } = data;

        const foundMovie = await Movie.findOne({ where: { title } });

        if(foundMovie){
           throw new ApolloError(`Movie with title '${title}' exists`, '400');
         }

        const newMovie = await Movie.create( { ...data });
        
        if(!newMovie){
            throw new ApolloError(`An error occurred while creating movie, try again`, '400');
          }

        const { id, genre} = newMovie;

        return { id ,title, genre };
      
};

const deleteMovie = async (id) =>{

    const foundMovie = await Movie.findOne({ where: { id } });

    if(!foundMovie){
        throw new ApolloError(`Movie with id '${id}'  does not exist`, '400');
    }
        
    await Movie.destroy({ where: { id}});

    const movies = Movie.findAll();
        
    return movies;
};



export default { getAllMovies , getMovieById , createMovie , deleteMovie };