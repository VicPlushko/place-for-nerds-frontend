export const getShows = () => {
    const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = `https://api.themoviedb.org/3/discover/tv?api_key=${MOVIES_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`

    return dispatch => {
        dispatch({type: 'LOADING_SHOWS'})
        fetch(URL)
        .then(resp => resp.json())
        .then(shows => dispatch({type: 'SHOWS_LOADED', payload: shows.results}))
    }
}

export const getHomeTV = () => {
    const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${MOVIES_KEY}&language=en-US&page=1`

    return dispatch => {
        dispatch({type: 'LOADING_SHOWS'})
        fetch(URL)
        .then(resp => resp.json())
        .then(shows => dispatch({type: 'SHOWS_LOADED', payload: shows.results}))
    }
}