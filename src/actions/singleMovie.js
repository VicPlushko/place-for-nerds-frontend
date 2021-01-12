export const getSingleMovie = (event) => {
    
    const URL = `http://localhost:3001/movies/${event.target.id}`

    return dispatch => {
        dispatch({type: "LOADING_SINGLE_MOVIE"})
        fetch(URL)
        .then(resp => resp.json())
        .then(movie => dispatch({type: 'SINGLE_MOVIE_LOADED', payload: movie.results}))
    }
}

