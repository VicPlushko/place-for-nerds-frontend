import React from 'react'

const ReviewButton = (props) => {

    const {handleReviewButton} = props

    return (
        <div className='review-btn-div'>
            <button className='review-btn' onClick={handleReviewButton}>Write a Review</button>
        </div>
    )
}

export default ReviewButton
