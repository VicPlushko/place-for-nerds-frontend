import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  // console.log('movie component', props)
  let imageURL;
  if (props.poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${props.poster}`
  }
        return (
            <div className="movie-list-container">
              <div className='poster-link'><Link to={`/movies/${props.movie_id}`}><img src={imageURL} alt="" id={props.id}></img></Link>
                <div className='movie-title'>
                  <div className='title-link'>{props.title}</div>
                </div>
              </div>
            </div>
        )
}

export default Movie
