import Sequelize from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT
});

sequelize.authenticate()
   .then( ()=>{
       console.log("DB Connection established ..");

   }).catch( (error)=>{
       console.error("An error occurred", error);
});

sequelize.sync();


module.exports = sequelize;