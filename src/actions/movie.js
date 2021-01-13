export const getMovies = () => {
    // const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = 'http://localhost:3001/movies'

    return dispatch => {
        dispatch({type: "LOADING_MOVIES"})
        fetch(URL)
        .then(resp => resp.json())
        .then(movies => dispatch({type: 'MOVIES_LOADED', payload: movies.slice(0, 20)}))
    }
}

// export const getSingleMovie = (event) => {
//     const movieShowUrl = `http://localhost:3001/${event.target.id}`

//     return dispatch => {
//         dispatch({type: 'LOADING_SINGLE_MOVIE'})
//         fetch(movieShowUrl)
//         .then(resp => resp.json())
//         .then(movie => dispatch({type: 'SINGLE_MOVIE_LOADED', 
//                                  payload: movie.results}))
//     }
// }