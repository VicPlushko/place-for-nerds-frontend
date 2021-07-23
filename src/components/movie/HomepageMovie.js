import React from 'react'
import { Link } from 'react-router-dom'

const HomepageMovie = (props) => {

  const {
    poster,
    id,
    title,
  } = props

  let imageURL;
  if (poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${poster}`
  }

      return (
          <div className='home-movies'>
            <div className='poster-link'><Link to={`/movies/${id}`}><img src={imageURL} alt='' id={id}></img></Link>
              <div className='movie-title'>
                <div className='title-link'>{title}</div>
              </div>
            </div>
          </div>
      )

}

export default HomepageMovie