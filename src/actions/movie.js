export const getMovies = () => {
    const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIES_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

    return dispatch => {
        dispatch({type: "LOADING_MOVIES"})
        fetch(URL)
        .then(resp => resp.json())
        .then(movies => dispatch({type: 'MOVIES_LOADED', payload: movies.results}))
    }
}

export const theaterMovies = () => {
    const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIES_KEY}&language=en-US&region=US&page=1`

    return dispatch => {
        dispatch({type: "LOADING_MOVIES"})
        fetch(URL)
        .then(resp => resp.json())
        .then(movies => dispatch({type: 'MOVIES_LOADED', payload: movies.results}))
    }
}