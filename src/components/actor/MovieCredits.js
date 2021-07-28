import React from 'react'
import { Link } from 'react-router-dom'
import { getYear } from '../../utitlity/util'

const MovieCredits = (props) => {

    const {
        poster,
        movie_id,
        title,
        release_date,
        character
    } = props

    let imageURL;
    if (poster == null) {
        imageURL = `https://picsum.photos/185/278`
    } else {
        imageURL = `http://image.tmdb.org/t/p/w185${poster}`
    }
    
    return (
        <div>
            <div className='castGrid'>
                <Link className='poster-link' to={`/movies/${movie_id}`}>
                    <img className='movie-poster' src={imageURL} alt=""></img>
                </Link>
                <div className='movie-name'>
                    {title} - {release_date === "" ? "TBD" : getYear(release_date)}
                </div>
                <div className='character-name'>
                    {character}
                </div>
            </div>
        </div>
    )
}

export default MovieCredits
