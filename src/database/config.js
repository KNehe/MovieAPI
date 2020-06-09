import Sequelize from 'sequelize';

const sequelize = new Sequelize('movie_api','postgres','postgres',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
   .then( ()=>{
       console.log("DB Connection established ..");

   }).catch( (error)=>{
       console.error("An error occurred", error);
});


module.exports = sequelize;