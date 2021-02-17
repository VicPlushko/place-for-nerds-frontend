import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {

  const [like, addLike] = useState(0)
  // console.log('movie component', props)
  let imageURL;
  if (props.poster == null) {
    imageURL = `https://picsum.photos/185/278`
  } else {
    imageURL = `http://image.tmdb.org/t/p/w185${props.poster}`
  }

        return (
            <div className="movie-list-container">
              <div className='poster-link'><Link to={`/movies/${props.id}`}><img src={imageURL} alt="" id={props.id}></img></Link>
                <div className='movie-title'>
                  <div className='title-link'>{props.title}</div>
                  <button onClick={() => addLike(like + 1)} id={props.id}>Likes {like}</button>
                </div>
              </div>
            </div>
        )

}

export default Movie
