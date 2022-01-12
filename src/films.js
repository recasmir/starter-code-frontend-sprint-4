//Exercise 1: Get the array of all directors. - Starting exercice
function getAllDirectors(movies) {
  let result = movies.map (movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter (movie => {
    if(director === movie.director){
      return movie.title;
    }
  }); 

  console.log("EXERCICE 2 ->", result);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let score = movies.filter (movie =>{
    if(director === movie.director){
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
 let result = titlesArray.slice(0,20);
 console.log("EXERCISE 4 ->", result);
 return result;
}
  

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
let result = [...movies].sort((a,b) => a.year > b.year ? 1 : -1 );
let res = result.sort((a,b) => {
  if(a.year === b.year){
    result.sort((a,b)=>a.title > b.title ? 1 : -1)}
  })

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
  //Array nova:
  function creadNewObject (objectFilm){
    return {...objectFilm};
  }
  let clonedArray = movies.map(creadNewObject);
  //Recorre tots els elements de la array
  let result = clonedArray.map(transformToMin);
  console.log("EXERCICE 7 ->", result);
  return result;
}

function transformToMin(movie) {
    let dur = movie.duration
    if (dur.includes('h')){
      let newDur = dur.split(' ')
      let hour = parseInt(newDur[0])*60
      dur = hour
      if(newDur[1]){
        let min = parseInt(newDur[1])
        dur = hour + min
      }  
    }else{
      dur = parseInt(dur)
    }
    movie.duration = dur
    return movie
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let years = movies.filter (movie => {
    if(year===movie.year){
      return movie.year;
    }})

  let result = years.sort((a,b) => b.score - a.score).slice(0,1)  

  console.log("EXERCICE 8 ->", result)
  return result
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


