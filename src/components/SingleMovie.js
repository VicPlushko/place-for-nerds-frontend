import React from 'react'

const SingleMovie = (props) => {

    console.log('single movie props is', props)
    const posterURL = 'http://image.tmdb.org/t/p/w500'
    return (
        <div>
            <header className='App-header'>
                <h1>{props.title}</h1>
            </header>
            <img className='show-poster' src={posterURL + props.poster} alt=''></img>
            <p><strong>Synopsis:</strong> {props.synopsis}</p>
            <p><strong>Release Date:</strong> {props.release_date}</p>
        </div>
    )
}

export default SingleMovie
