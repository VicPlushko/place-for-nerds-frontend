import React from 'react'

const MovieReviewForm = (props) => {

    const {
        handleSubmit,
        title,
        handleTitleChange,
        content,
        handleContentChange
    } = props
    
    console.log('movie review form props is', props)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Review Title: </label><br />
                <input id='review-title-input' type='text' name='title' value={title} onChange={handleTitleChange} placeholder='Title...' /><br />
                <label>Write a Review:  </label><br />
                <textarea id='review-input' type='text' name='content' value={content} onChange={handleContentChange} placeholder='Write a review here...'/><br />
                <input type='submit' value='Post Review' />
            </form>
        </div>
    )
}

export default MovieReviewForm
