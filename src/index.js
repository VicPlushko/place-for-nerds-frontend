import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import MoviesContainer from './containers/movies/MoviesContainer'
import Home from './components/Home'
import SingleMovieContainer from './containers/movies/SingleMovieContainer'
import ActorContainer from './containers/ActorContainer'
import TvShowContainer from './containers/tv_shows/TvShowContainer'
import SingleShowContainer from './containers/tv_shows/SingleShowContainer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/movies' component={MoviesContainer}/>
        <Route exact path='/movies/:id' component={SingleMovieContainer}/>
        <Route exact path='/actors/:id' component={ActorContainer} />
        <Route exact path='/tv_shows' component={TvShowContainer} />
        <Route exact path='/tv_shows/:id' component={SingleShowContainer} />
      </Switch>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
