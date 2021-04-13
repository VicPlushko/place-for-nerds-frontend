import React from 'react'

const ReviewButton = (props) => {
    return (
        <div>
            <button className='review-btn' onClick={props.handleReviewButton}>Write a Review</button>
        </div>
    )
}

export default ReviewButton
