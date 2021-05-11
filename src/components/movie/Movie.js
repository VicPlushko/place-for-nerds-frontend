import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {

  const {
    poster,
    id,
    title,
  } = props

  const [like, addLike] = useState(0)

  // console.log('movie component', props)

  let imageURL;
  if (poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${poster}`
  }

      return (
          <div className="movie-list-container">
            <div className='poster-link'><Link to={`/movies/${id}`}><img src={imageURL} alt="" id={id}></img></Link>
              <div className='movie-title'>
                <div className='title-link'>{title}</div>
                <button onClick={() => addLike(like + 1)} id={id}>Likes {like}</button>
              </div>
            </div>
          </div>
      )

}

export default Movie
