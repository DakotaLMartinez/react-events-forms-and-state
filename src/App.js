import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/movieList';
import MovieForm from './components/movieForm';

class App extends Component {
  state = {
    movies: [
      {
        title: "The Matrix", 
        releaseYear: 1999
      }
    ]
  }

  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  render() {
    return (
      <div className="container">
        <h2>Our favorite movies</h2>
        <MovieList movies={this.state.movies} />
        <h4>Add a Movie</h4>
        <MovieForm addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;
