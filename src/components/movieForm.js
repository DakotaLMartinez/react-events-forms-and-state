import React, { Component } from 'react'

export default class MovieForm extends Component {
  state = {
    movie: {
      title: '',
      releaseYear: 1995
    },
    error: ''
  }

  onChange = event => {
    this.setState({
      movie: {
        ...this.state.movie,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.movie.title) {
      this.props.addMovie(this.state.movie)
      this.setState({
        movie: {
          title: '', 
          releaseYear: 1995
        },
        error: ''
      })
    } else {
      this.setState({
        error: 'Please fill in a title'
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="title">Title: </label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={this.state.movie.title} 
            onChange={this.onChange}
          />
          {this.state.error}
        </p>
        <p>
          <label htmlFor="releaseYear">Release Year: </label>
          <input 
            type="number" 
            id="releaseYear" 
            name="releaseYear"
            value={this.state.movie.releaseYear} 
            onChange={this.onChange}
          />
        </p>
        <p>
          <input type="submit" value="Add Movie" />
        </p>
      </form>
    )
  }
}