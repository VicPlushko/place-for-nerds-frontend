import React from 'react'

const MovieReviewForm = (props) => {

    const {
        handleSubmit,
        title,
        handleTitleChange,
        content,
        handleContentChange,
        backdrop
    } = props
    
    console.log('movie review form props is', props)

    const backdropUrl = `http://image.tmdb.org/t/p/original${backdrop}`

    return (
        <div className='review-form'>
            <form onSubmit={handleSubmit} style={{backgroundImage: "url(" + backdropUrl + ")"}}>
                <input className='form-input'  id='review-title-input' type='text' name='title' value={title} onChange={handleTitleChange} placeholder='Title...' /><br /><br />
                <textarea className='form-input' id='review-content-input' type='text' name='content' value={content} onChange={handleContentChange} placeholder='Write a review here...'/><br />
                <input className='review-submit-btn' type='submit' value='Post Review' />
            </form>
        </div>
    )
}

export default MovieReviewForm
