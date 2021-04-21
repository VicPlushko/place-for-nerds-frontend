import React from 'react'


const SingleShow = (props) => {

    console.log('single show props is', props)
    const backdropUrl = `http://image.tmdb.org/t/p/original${props.backdrop}`
    
    return (
        <div className='single-movie' style={{backgroundImage: "url(" + backdropUrl + ")"}}>
            <div className='single-movie-fade'>
            <div className='App-header'>
                <h1>{props.title}</h1>
                "{props.tagline}"
            </div>
                <div className="singleView">
                    <a href='#show-reviews'>Reviews</a>
                    <p className='show-info'><strong>Show Creator:</strong> {props.show_creator}</p>
                    <p className='show-info'><strong>Genre:</strong> {props.genres}</p>
                    <p className='show-info'><strong>Synopsis:</strong> {props.synopsis}</p>
                    <p className='show-info'><strong>Release Date:</strong> {props.release_date}</p>
                    <p className='show-info'><strong>Number of Seasons:</strong> {props.seasons}</p>
                    <p className='show-info'><strong>Number of Episodes:</strong> {props.episodes}</p>
                    <p className='show-info'><strong>Production Companies:</strong>{props.productionCompanies}</p>
                    <p className='show-info'><strong>Homepage:</strong> <a href={props.homepage} target='_blank' rel='noreferrer'>{props.homepage}</a></p>
                    <p><strong>Watch On:</strong> {props.network}</p>
                    <strong><h1>Cast:</h1></strong>
                    <div className='castContainer'>
                        {props.cast}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SingleShow
