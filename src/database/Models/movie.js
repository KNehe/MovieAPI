import sequelize from './../config';
import Sequelize from 'sequelize';

const Movie = sequelize.define( 'movies',{

    id:{
        type: Sequelize.INTEGER(100),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:Sequelize.STRING(100),
    genre: Sequelize.STRING(100),
    author_id: {
        type: Sequelize.INTEGER(100),
        foreignKey: true,
        allowNull:false
    }


});

export default Movie;