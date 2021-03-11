import React from 'react'

const MovieReviewForm = (props) => {
console.log('movie review form props is', props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Review Title: </label><br />
                <input id='review-title-input' type='text' value={props.title} onChange={props.handleTitleChange} placeholder='Title...' /><br />
                <label>Write a Review:  </label><br />
                <textarea id='review-input' type='text' value={props.content} onChange={props.handleContentChange} placeholder='Write a review here...'/><br />
                <input type='submit' value='Post Review' />
            </form>
        </div>
    )
}

export default MovieReviewForm
