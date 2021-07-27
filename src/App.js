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
import Registration from './containers/user/Registration'
import Login from './containers/user/Login'
import Footer from './components/Footer'
import { connect } from 'react-redux';
import { getMovies, theaterMovies } from './actions/movie'
import { getShows, getHomeTV } from './actions/tvShows'
import { userLogin } from './actions/user'

class App extends Component {

  componentDidMount() {
    const {getMovies, theaterMovies, getShows, getHomeTV} = this.props
    getMovies()
    theaterMovies()
    getShows()
    getHomeTV()
  }

  render() {

    // const token = localStorage.getItem('token')

    // if (token) {
    //   console.log(this.props.username)
    // }

    
    return (
      <Router>
        <div className='App'>
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
            <Route exact path='/register' component={Registration} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  
}

const mapStateToProps = globalState => {
  return {
    isAuthenticated: globalState.userReducer.isAuthenticated,
    username: globalState.userReducer.username
  }
}

export default connect(mapStateToProps, { getMovies, theaterMovies, getShows, getHomeTV })(App)
