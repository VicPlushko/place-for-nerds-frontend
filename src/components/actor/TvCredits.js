import React from 'react'
import { Link } from 'react-router-dom'
import { getYear } from '../../utitlity/util'

const TvCredits = (props) => {

    const {
        poster,
        show_id,
        title,
        release_date,
        character
    } = props

    
     console.log('tv credits props', props)

    let imageURL = ""
    if (poster == null) {
        imageURL = `https://picsum.photos/185/278`
    } else {
        imageURL = `http://image.tmdb.org/t/p/w185${poster}`
    }
    
    return (
        <div>
            <div className='castGrid'>
                <Link to={`/tv_shows/${show_id}`}className='poster-link'><img className='movie-poster' src={imageURL} alt=""></img>
                </Link>
                <div className='movie-name'>{title} - {release_date === "" ? "TBD" : getYear(release_date)}</div>
                <div className='character-name'>{character}</div>
                </div>
        </div>
    )
}

export default TvCredits
