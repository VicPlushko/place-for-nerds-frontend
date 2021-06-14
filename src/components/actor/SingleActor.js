import React from 'react'

const SingleActor = (props) => {
    
    const {
        poster,
        name,
        birthday,
        placeOfBirth,
        biography,
        homepage,
        movieCredits,
        tvCredits
    } = props

    // console.log('single actor props is', props)

    let imageURL;
    if (poster == null) {
        imageURL = `https://picsum.photos/185/278`
    } else {
        imageURL = `http://image.tmdb.org/t/p/w185${poster}`
    }

    return (
        <div className='single-actor'>
            <div className='App-header'>
                <h1>{name}</h1>
            </div>
                <div className="singleView">
                    <img className='show-poster' src={imageURL} alt=''></img>
                    <p className='show-info'><strong>Birthday:</strong> {birthday}</p>
                    <p className='show-info'><strong>Place of Birth:</strong> {placeOfBirth}</p>
                    <p className='show-info'><strong>Biography:</strong> {biography}</p>
                    <p className='show-info'><strong>Homepage:</strong> <a href={homepage} target='_blank' rel='noreferrer'> {homepage}</a></p>
                    <strong><h1>Movies:</h1></strong>
                    <div className='castContainer'>
                        {movieCredits}
                    </div>
                    <strong><h1>TV Shows:</h1></strong>
                    <div className='castContainer'>
                        {tvCredits}
                    </div>
                </div>
        </div>
    )
}

export default SingleActor
