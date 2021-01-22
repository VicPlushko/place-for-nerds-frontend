import React from 'react'

const SingleActor = (props) => {
    // console.log('single actor props is', props)
    
    let imageURL;
    if (props.poster == null) {
        imageURL = `https://picsum.photos/185/278`
    } else {
        imageURL = `http://image.tmdb.org/t/p/w185${props.poster}`
    }

    return (
        <div className='single-actor'>
            <div className='App-header'>
                <h1>{props.name}</h1>
            </div>
                <div className="singleView">
                    <img className='show-poster' src={imageURL} alt=''></img>
                    <p className='show-info'><strong>Birthday:</strong> {props.birthday}</p>
                    <p className='show-info'><strong>Place of Birth:</strong> {props.placeOfBirth}</p>
                    <p className='show-info'><strong>Biography:</strong> {props.biography}</p>
                    <p className='show-info'><strong>Homepage:</strong> <a href={props.homepage} target='_blank' rel='noreferrer'>{props.homepage}</a></p>
                    <strong><h1>Movies:</h1></strong>
                    <div className='castContainer'>
                        {props.movieCredits}
                    </div>
                    <strong><h1>TV Shows:</h1></strong>
                    <div className='castContainer'>
                        {props.tvCredits}
                    </div>
                </div>
        </div>
    )
}

export default SingleActor
