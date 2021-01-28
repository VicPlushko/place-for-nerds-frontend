import React from 'react'

const MovieReview = (props) => {
// console.log('movie review props is', props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Write a Review:  </label><br />
                <textarea id='review-input' type='text' value={props.content} onChange={props.handleChange} placeholder='Write a review here...'/><br />
                <input type='submit' value='Post Review' />
            </form>
        </div>
    )
}

export default MovieReview
