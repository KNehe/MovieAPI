import sequelize from './../config';
import Sequelize from 'sequelize';

const Author = sequelize.define('authors',{
    id:{
        type: Sequelize.INTEGER(100),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name:Sequelize.STRING(100),
    last_name: Sequelize.STRING(100),
    movie_id:{
        type: Sequelize.INTEGER(100),
        foreignKey: true,
        allowNull:Author
    }
});

export default Movie;