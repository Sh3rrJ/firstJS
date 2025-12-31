'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const movie1 = prompt('Один из последних просмотренных фильмов?', ''),
      rank1 = prompt('На сколько оцените его?', ''),
      movie2 = prompt('Один из последних просмотренных фильмов?', ''),
      rank2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movie1] = rank1;
personalMovieDB.movies[movie2] = rank2;

console.log(personalMovieDB)




