import sequelize from '../config';
import Sequelize from 'sequelize';

const Actor = sequelize.define('actors',{
    id:{
        type: Sequelize.INTEGER(100),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name:Sequelize.STRING(100),
    last_name: Sequelize.STRING(100)
});

export default Actor;