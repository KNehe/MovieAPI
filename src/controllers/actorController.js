import Actor from './../database/Models/actor';
import Movie from './../database/Models/movie';

import { ApolloError } from 'apollo-server-express';
import sequelize from 'sequelize';
const Op = sequelize.Op;

Actor.belongsToMany(Movie, { through: 'ActorMovies' });

const createActor = async ( data ) =>{
   
    const { first_name, last_name }= data;

    const foundActor = await Actor.findOne({ where:{ [Op.and]:[ { first_name}, { last_name }] } });

    if(foundActor){
       throw new ApolloError(`Actor with name '${first_name} ${last_name}' exists`, '400');
    }

    const newActor = await Actor.create({ ...data });

    return newActor;

};

const findAllActors = async () =>{
    
    const actors = await Actor.findAll({
        include: [ Movie]
    });

    return actors;

};

export default { createActor, findAllActors };