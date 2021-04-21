import React from 'react'

const SingleMovie = (props) => {

    console.log('single movie props is', props)
    const backdropUrl = `http://image.tmdb.org/t/p/original${props.backdrop}`
    
    return (
        <div className='single-movie' style={{backgroundImage: "url(" + backdropUrl + ")"}}>
            <div className='single-movie-fade'>
            <div className='App-header'>
                <h1>{props.title}</h1>
            </div>
                <div className="singleView">
                    <a href='#movie-reviews'>Reviews</a>
                    <p className='show-info'><strong>Runtime:</strong> {props.runtime} Minutes</p>
                    <p className='show-info'><strong>Genre:</strong> {props.genres}</p>
                    <p className='show-info'><strong>Synopsis:</strong> {props.synopsis}</p>
                    <p className='show-info'><strong>Release Date:</strong> {props.release_date}</p>
                    <p className='show-info'><strong>Budget:</strong>  ${props.budget}</p>
                    <p className='show-info'><strong>Revenue:</strong> ${props.revenue}</p>
                    <p className='show-info'><strong>Production Companies:</strong>{props.productionCompanies}</p>
                    <strong><h1>Cast:</h1></strong>
                    <div className='castContainer'>
                        {props.cast}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie
