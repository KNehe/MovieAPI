import sequelize from './../config';
import Sequelize from 'sequelize';

const Movie = sequelize.define( 'movies',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:Sequelize.STRING(20),
    genre: Sequelize.STRING(10)


});

export default Movie;