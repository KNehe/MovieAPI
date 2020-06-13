import Movie from './../database/Models/movie';
import  { ApolloError } from 'apollo-server-express';

const getAllMovies =  async () =>{

    const movies =  await Movie.findAll();
    return movies;
};

const getMovieById =   async ( id) =>{

    const movie = await Movie.findOne({ where: { id} });

    return movie;
};

const createMovie = async ( data ) =>{
        
        const newMovie = await Movie.create( { ...data});
        
        return newMovie;
      
};

const deleteMovie = async (id) =>{
        
        await Movie.destroy({ where: { id}});

        const movies = Movie.findAll();
        
        return movies;
};



export default { getAllMovies , getMovieById , createMovie , deleteMovie };