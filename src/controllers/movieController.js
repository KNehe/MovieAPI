const movies = [
    {
        id: 1, 
        title:"Men in black",
        genre:"Action"
    }
    , {
        id: 2, 
        title:"Young Sheldon",
        genre:"Comedy"
    },
    {
        id: 3, 
        title:"Blacklist",
        genre:"Drama"
    }

];

const getAllMovies = () =>{
  return movies;
};

const getMovieById = ( id) =>{

    let movie = {};

    movies.forEach( e=> {
        if(e.id == id){
            movie = e;
        }
    });

    return movie;
};

const createMovie = ( title , genre ) =>{
      let id = movies.length + 1;
      const newMovie = {id, title, genre};
      movies.push(newMovie);
      return newMovie;
};

const deleteMovie = (id) =>{
        const movie = movies.findIndex( movie => movie.id === id );
        movies.splice(movie,1);
        return movies;
};


export default { getAllMovies , getMovieById , createMovie , deleteMovie };