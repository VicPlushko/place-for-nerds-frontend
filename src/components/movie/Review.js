import React from 'react'

const Review = (props) => {

const {
    title,
    content,
} = props

    return (
        <div>
            <div className='review-content-div'>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Review
