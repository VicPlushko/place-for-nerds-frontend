export const getMovies = () => {
    const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIES_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

    return dispatch => {
        dispatch({type: "LOADING_MOVIES"})
        fetch(URL)
        .then(resp => resp.json())
        .then(movie => dispatch({type: 'MOVIES_LOADED', payload: movie.results}))
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