import React from 'react'

const SingleMovie = (props) => {

    const posterURL = 'http://image.tmdb.org/t/p/w300'
    return (
        <div>
            <header className='App-header'>
                <h1>{props.title}</h1>
            </header>
            {props.poster}
        </div>
    )
}

export default SingleMovie
