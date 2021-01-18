export const getMovies = () => {
    // const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = 'http://localhost:3001/movies'

    return dispatch => {
        dispatch({type: "LOADING_MOVIES"})
        fetch(URL)
        .then(resp => resp.json())
        .then(movies => dispatch({type: 'MOVIES_LOADED', payload: movies.slice(0, 50)}))
    }
}