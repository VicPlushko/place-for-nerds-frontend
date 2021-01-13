import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  console.log('movie component', props)
  // let id = props.match.params.id
  const imageURL = 'http://image.tmdb.org/t/p/w185'
        return (
            <div>
              <Link to={`/movies/${props.id}`}><img src={imageURL + props.poster} alt="" id={props.id}></img>{props.title}</Link>
            </div>
        )
}

export default Movie
