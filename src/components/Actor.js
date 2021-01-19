import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  // console.log('actor component', props)
  let imageURL;
  if (props.poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${props.poster}`
  }
        return (
            <div className="movie-list-container">
              <div className='poster-link'><Link to={`/actors/${props.id}`}><img src={imageURL} alt="" id={props.id}></img></Link>
                <div className='movie-title'>
                  <Link className='title-link'to={`/actors/${props.id}`}>{props.name}</Link>
                <div className='cast-character'>{props.character}</div>
                </div>
              </div>
            </div>
        )
}

export default Movie
