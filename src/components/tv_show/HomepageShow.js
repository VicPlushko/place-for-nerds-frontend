import React from 'react'
import { Link } from 'react-router-dom'

const TvShow = (props) => {

  const {
    poster,
    id,
    title,
    show_id
  } = props

  let imageURL;
  if (poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${poster}`
  }
  
    return (
      <div className='home-shows'>
          <div className='poster-link'>
            <Link to={`/tv_shows/${show_id}`}>
              <img src={imageURL} alt='' id={id}></img>
            </Link>
              <div className='movie-title'>
                <div className='title-link'>
                  {title}
                </div>
              </div>
          </div>
      </div>
    )
}

export default TvShow
