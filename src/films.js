// fetch("./data.json")
// .then(response => response.json())
// .then(data => console.log(data));

//const movies = require("./data");

// const movies = require("./data");

// import {movies} from './data.js';



//Exercise 1: Get the array of all directors. - Starting exercice
function getAllDirectors(movies) {
  let result =  movies.map (movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter (movie => {
    if(director==movie.director){
      return movie.title;
    }
  }); 

  console.log("EXERCICE 2 ->", result);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let score = movies.filter (movie =>{
    if(director==movie.director){
      return movie.score;
    }
  })
  let result = score.reduce((total,num)=>{
    return total+num.score/score.length;
  },0)

  console.log("EXERCICE 3 ->", result.toFixed(2));
  return result;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
 let titles = [...movies].sort((a, b) => a.title > b.title ? 1 : -1 );
 let titlesArray = titles.map(title => title['title']);
 let result= titlesArray.slice(0,20);
 console.log("EXERCISE 4 ->", result);
 return result;
}
  

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
let result = [...movies].sort((a,b) => a.year > b.year ? 1 : -1 );
let res = result.sort((a,b) => {
  if(a.year === b.year){
    result.sort((a,b)=>a.title > b.title ? 1 : -1)}
  } )

console.log("EXERCISE 5 ->", res);
return res;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,category) {
  let score = movies.filter (movie => {
    if(category==movie.genre){
      return movie.score;
    }})

    let result = score.reduce((total,num)=>{
      return total+num.score/score.length;
    },0)
  
    console.log("EXERCICE 6 ->", result.toFixed(2));
    return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result = [...movies].map (movie => {
    
      let dur = movie.duration.split('h')
  
    dur[0] = dur[0]*60
    if(dur[1]){
      dur[1] = dur[1].replace('min','')
      dur[1] = parseInt(dur[1])
    }
    dur = dur[0]+ dur[1]
    //dur = dur.toString().concat('min')
    movie.duration = dur
    return movie
  })
    console.log("EXERCICE 7 ->", result)
    return result
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let years = movies.filter (movie => {
    if(year==movie.year){
      return movie.year;
    }})

  let result = years.reduce((acc, movie) => acc = acc > movie.score ? acc : movie.score, 0);

  let bestMovie = years.filter(year => {
    if(year.score==result){
      return year;
    }
  })
  console.log("EXERCICE 8 ->", bestMovie);
  return bestMovie;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
