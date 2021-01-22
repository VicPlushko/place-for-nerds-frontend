import React from 'react'
import { Link } from 'react-router-dom'

const MovieCredits = (props) => {
    const getYear = (x) => {
        return x.split('-')[0]
    }
    console.log('movie credits props', props)
    let imageURL;
    if (props.poster == null) {
        imageURL = `https://picsum.photos/185/278`
    } else {
        imageURL = `http://image.tmdb.org/t/p/w185${props.poster}`
    }
    return (
        <div>
            <div className='castGrid'>
                <Link className='poster-link' to={`/movies/${props.movie_id}`}><img className='movie-poster' src={imageURL} alt=""></img>
                </Link>
                <div className='movie-name'>{props.title} - {props.release_date === undefined ?"TBD" : getYear(props.release_date)}</div>
                <div className='character-name'>{props.character}</div>
                </div>
        </div>
    )
}

export default MovieCredits
