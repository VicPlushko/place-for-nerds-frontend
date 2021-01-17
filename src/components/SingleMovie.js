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
            <p className='show-info'><strong>Runtime:</strong> {props.runtime} Minutes</p>
            <p className='show-info'><strong>Genre:</strong> {props.genres}</p>
            <p className='show-info'><strong>Synopsis:</strong> {props.synopsis}</p>
            <p className='show-info'><strong>Release Date:</strong> {props.release_date}</p>
            <p className='show-info'><strong>Budget:</strong>  ${props.budget}</p>
            <p className='show-info'><strong>Revenue:</strong> ${props.revenue}</p>
            <p className='show-info'><strong>Production Companies:</strong> {props.productionCompanies}</p>
            <p className='cast-list'><strong><h2>Cast:</h2></strong>{props.cast}</p>
        </div>
    )
}

export default SingleMovie
