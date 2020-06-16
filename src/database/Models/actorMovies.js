import sequelize from '../config';
import Sequelize from 'sequelize';

const ActorMovies = sequelize.define('actormovies',{
    movieid:Sequelize.INTEGER(100),
    actorid: Sequelize.INTEGER(100)
});

export default ActorMovies;