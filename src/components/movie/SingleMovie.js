import React from 'react'

const SingleMovie = (props) => {

    const {
        backdrop,
        title,
        runtime,
        genres,
        synopsis,
        release_date,
        budget,
        revenue,
        productionCompanies,
        cast
    } = props

    console.log('single movie props is', props)

    const backdropUrl = `http://image.tmdb.org/t/p/original${backdrop}`
    
    return (
        <div className='single-movie' style={{backgroundImage: "url(" + backdropUrl + ")"}}>
            <div className='single-movie-fade'>
            <div className='movies-header'>
                <h1>{title}</h1>
            </div>
                <div className="singleView">
                    <a href='#movie-reviews'>Reviews</a>
                    <p className='show-info'><strong>Runtime:</strong> {runtime} Minutes</p>
                    <p className='show-info'><strong>Genre:</strong> {genres}</p>
                    <p className='show-info'><strong>Synopsis:</strong> {synopsis}</p>
                    <p className='show-info'><strong>Release Date:</strong> {release_date}</p>
                    <p className='show-info'><strong>Budget:</strong>  ${budget}</p>
                    <p className='show-info'><strong>Revenue:</strong> ${revenue}</p>
                    <p className='show-info'><strong>Production Companies:</strong>{productionCompanies}</p>
                    <strong><h1>Cast:</h1></strong>
                    <div className='castContainer'>
                        {cast}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie
