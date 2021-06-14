import React from 'react'


const SingleShow = (props) => {

    const {
        backdrop,
        title,
        tagline,
        show_creator,
        genres,
        synopsis,
        release_date,
        seasons,
        episodes,
        productionCompanies,
        homepage,
        network,
        cast
    } = props

    console.log('single show props is', props)

    const backdropUrl = `http://image.tmdb.org/t/p/original${backdrop}`
    
    return (
        <div className='single-movie' style={{backgroundImage: "url(" + backdropUrl + ")"}}>
            <div className='single-movie-fade'>
            <div className='App-header'>
                <h1>{title}</h1>
                "{tagline}"
            </div>
                <div className="singleView">
                    <a href='#show-reviews'>Reviews</a>
                    <p className='show-info'><strong>Show Creator:</strong> {show_creator}</p>
                    <p className='show-info'><strong>Genre:</strong> {genres}</p>
                    <p className='show-info'><strong>Synopsis:</strong> {synopsis}</p>
                    <p className='show-info'><strong>Release Date:</strong> {release_date}</p>
                    <p className='show-info'><strong>Number of Seasons:</strong> {seasons}</p>
                    <p className='show-info'><strong>Number of Episodes:</strong> {episodes}</p>
                    <p className='show-info'><strong>Production Companies:</strong>{productionCompanies}</p>
                    <p className='show-info'><strong>Homepage:</strong> <a href={homepage} target='_blank' rel='noreferrer'>{homepage}</a></p>
                    <p><strong>Watch On:</strong> {network}</p>
                    <strong><h1>Cast:</h1></strong>
                    <div className='castContainer'>
                        {cast}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SingleShow
