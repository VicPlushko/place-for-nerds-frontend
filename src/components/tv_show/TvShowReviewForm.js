import React from 'react'

const TvShowReviewForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Review Title: </label><br />
                <input id='review-title-input' type='text' name='title' value={props.title} onChange={props.handleTitleChange} placeholder='Title...' /><br />
                <label>Write a Review:  </label><br />
                <textarea id='review-input' type='text' name='content' value={props.content} onChange={props.handleContentChange} placeholder='Write a review here...'/><br />
                <input type='submit' value='Post Review' />
            </form>
        </div>
    )
}

export default TvShowReviewForm
