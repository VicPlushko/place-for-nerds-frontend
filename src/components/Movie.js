import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  console.log('movie component', props)
  const imageURL = 'http://image.tmdb.org/t/p/w185'
        return (
            <div>
              <Link to='/movies/'><img src={imageURL + props.poster} alt="" id={props.id}></img>{props.title}</Link>
            </div>
        )
}

export default Movie
