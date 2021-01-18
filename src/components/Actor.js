import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  console.log('movie component', props)
  // let id = props.match.params.id
  const imageURL = 'http://image.tmdb.org/t/p/w185'
        return (
            <div className="movie-list-container">
              <div className='poster-link'><Link to={`/actors/${props.id}`}><img src={imageURL + props.profile_path} alt="" id={props.id}></img></Link>
                <div className='movie-title'>
                  <Link className='title-link'to={`/actors/${props.id}`}>{props.name}</Link>
                </div>
              </div>
            </div>
        )
}

export default Movie
