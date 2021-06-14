import React from 'react'

const Review = (props) => {

const {
    title,
    content
} = props

    return (
        <div className='review-outer-div'>
            <li>
                <div>
                  <h3>{title}</h3>
                </div>
                <div>
                   {content}
                </div>
                
            </li>
        </div>
    )
}

export default Review
