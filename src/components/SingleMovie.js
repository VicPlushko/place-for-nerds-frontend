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
            <p><strong>Runtime:</strong> {props.runtime} Minutes</p>
            <p><strong>Genre:</strong> {props.genres}</p>
            <p><strong>Synopsis:</strong> {props.synopsis}</p>
            <p><strong>Release Date:</strong> {props.release_date}</p>
            <p><strong>Budget:</strong> {props.budget}</p>
            <p><strong>Revenue:</strong> {props.revenue}</p>
            <p><strong>Production Companies:</strong> {props.productionCompanies}</p>
            <p><strong>Cast:</strong> {props.cast}</p>
        </div>
    )
}

export default SingleMovie
