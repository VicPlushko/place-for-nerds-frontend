import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import MovieContainer from './containers/MovieContainer'
import movieReducer from './reducers/movieReducer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movies</h1>
        </header>
        <MovieContainer />
      </div>
    );
  }
  
}

export default App;
