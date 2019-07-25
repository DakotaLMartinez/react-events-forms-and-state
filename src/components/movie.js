import React from 'react';

const Movie = ({title, releaseYear}) => {
  //debugger
  return(
    <li>{title} released in {releaseYear}</li>
  )
}

export default Movie;