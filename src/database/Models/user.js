import sequelize from './../config';
import Sequelize from 'sequelize';

const User = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER(100),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name:Sequelize.STRING(100),
    last_name: Sequelize.STRING(100),
    email:{
        type: Sequelize.STRING(100),
        unique:true
    },
    role:Sequelize.STRING(10),
    password:Sequelize.STRING,
});

export default User;