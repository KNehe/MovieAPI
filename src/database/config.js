import sequelize from 'sequelize';

const db = new sequelize('movie_api','postgres','postgres',{
    host: 'localhost',
    dialect: 'postgres'
});

const testDb = () =>{

db.authenticate()
   .then( ()=>{
       console.log("DB Connection established ..");

   }).catch( (error)=>{
       console.error("An error occurred", error);
    });

};


export default testDb;