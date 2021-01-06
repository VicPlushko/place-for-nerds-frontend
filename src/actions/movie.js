export const getMovies = () => {
    return dispatch => {
        dispatch({type: "LOADING_MOVIES"})
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    }
}