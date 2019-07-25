import React from 'react';
import Movie from './movie';

const MovieList = ({movies}) => {
  //debugger
  return (
    <ul>
      {movies.map((movie,index) => <Movie key={movie.title} {...movie}/>)}
    </ul>
  )
}

export default MovieList;