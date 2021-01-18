import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  console.log('movie component', props)
  // let id = props.match.params.id
  let imageURL = ""
  if (props.poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${props.poster}`
  }
        return (
            <div className="movie-list-container">
              <div className='poster-link'><Link to={`/movies/${props.movie_id}`}><img src={imageURL} alt="" id={props.id}></img></Link>
                <div className='movie-title'>
                  <Link className='title-link'to={`/movies/${props.movie_id}`}>{props.title}</Link>
                </div>
              </div>
            </div>
        )
}

export default Movie
