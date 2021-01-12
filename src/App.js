import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import MoviesContainer from './containers/MoviesContainer'
import movieReducer from './reducers/movieReducer';
import SingleMovieContainer from './containers/SingleMovieContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          {/* <h1>Movies</h1> */}
        {/* </header> */}
        {/* <MoviesContainer /> */}
      </div>
    );
  }
  
}

export default App;
