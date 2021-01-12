import React from 'react'

const Movie = (props) => {
  console.log('movie component', props)
  const imageURL = 'http://image.tmdb.org/t/p/w185'
        return (
            <div>
              <a id={props.id} onClick={props.handleClick} href=""><img  src={imageURL + props.poster} alt="" id={props.id}></img>{props.title}</a>
            </div>
        )
}

export default Movie
