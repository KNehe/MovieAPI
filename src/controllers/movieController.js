import Movie from './../database/Models/movie';
import Actor from './../database/Models/actor';
import ActorMovies from './../database/Models/actorMovies';
import sequelize from 'sequelize';
const Op = sequelize.Op;

import  { ApolloError } from 'apollo-server-express';

Movie.belongsToMany(Actor, { through: 'ActorMovies' });

const getAllMovies =  async () =>{

    const movies =  await Movie.findAll({ include: [Actor]});
    return movies;
};

const getMovieById =   async ( id) =>{

    const movie = await Movie.findOne({ where: { id} });

    const foundMovie = await Movie.findOne({  where: { id }, include: [Actor] });

    if(!foundMovie){
        throw new ApolloError(`Movie with id '${id}'  does not exist`, '400');
    }

    return movie;
};

const createMovie = async ( data ) => {
   
        const  { title , actors } = data;
       
        const foundMovie = await Movie.findOne({ where: { title } });
         
        //initially halt movie creation if exists
        if(foundMovie){
           throw new ApolloError(`Movie with title '${title}' exists`, '400');
         }

        //for every actor
        for(let i = 0;  i < actors.length; i++ ){

            const { first_name, last_name } = actors[i];
             
            //check if actor exists
            const foundActor = await Actor.findOne({ where:{ [Op.and]:[ { first_name}, { last_name }] } });
           
            let newActor;
            //if actor not found, create the actor
            if(!foundActor){
                newActor = await Actor.create({ first_name, last_name });
                await createMovieAndActorMovies(data, newActor);
            }else{
                await createMovieAndActorMovies(data, foundActor);
            }            
        }

        return  await Movie.findOne({
            include: [Actor],
            where:{ title }
        });
      
};

const deleteMovie = async (id) =>{

    const foundMovie = await Movie.findOne({ where: { id } });

    if(!foundMovie){
        throw new ApolloError(`Movie with id '${id}'  does not exist`, '400');
    }
        
    await Movie.destroy({ where: { id}});
    
    await ActorMovies.destroy({  where: { movieid: id } })

    const movies = await Movie.findAll({include: [Actor]});
        
    return movies;
};

const  createMovieAndActorMovies = async ( data, actor )=>{
   
    const foundMovie = await Movie.findOne({ where: { title: data.title } });
    
    //create movie if it doesn't exist
    if(!foundMovie){
        const newMovie =  await Movie.create( { ...data });
        await ActorMovies.create({ movieid: newMovie.id, actorid: actor.id});
    }else{
        await ActorMovies.create({ movieid: foundMovie.id, actorid: actor.id});
    }   

};



export default { getAllMovies , getMovieById , createMovie , deleteMovie };