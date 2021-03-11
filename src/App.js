// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import MoviesContainer from './containers/movies/MoviesContainer'
import Home from './components/Home'
import SingleMovieContainer from './containers/movies/SingleMovieContainer'
import ActorContainer from './containers/ActorContainer'
import TvShowContainer from './containers/tv_shows/TvShowContainer'
import SingleShowContainer from './containers/tv_shows/SingleShowContainer'
import Navigation from './components/Navigation'
import { connect } from 'react-redux';
import { getMovies } from './actions/movie'
import { getShows } from './actions/tvShows'

class App extends Component {

  componentDidMount() {
    this.props.getMovies()
    this.props.getShows()
}

  render() {
    return (
      <Router>
        <div className="App">
          <header className='App-header'>
            <Navigation />
          </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/movies' component={MoviesContainer}/>
          <Route exact path='/movies/:id' component={SingleMovieContainer}/>
          <Route exact path='/actors/:id' component={ActorContainer} />
          <Route exact path='/tv_shows' component={TvShowContainer} />
          <Route exact path='/tv_shows/:id' component={SingleShowContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
  
}

export default connect(null, { getMovies, getShows })(App)
