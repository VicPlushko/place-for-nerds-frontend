import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  
  // console.log('actor component', props)
  
  const {
    id,
    poster,
    name,
    character
  } = props

  let imageURL;
  if (poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${poster}`
  }

      return (
          <div className="movie-list-container">
            <div className='poster-link'><Link to={`/actors/${id}`}><img src={imageURL} alt="" id={id}></img></Link>
              <div className='movie-title'>
                {name}
               <div className='cast-character'>{character}</div>
              </div>
            </div>
          </div>
      )
}

export default Movie
