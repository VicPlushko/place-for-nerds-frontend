import React from 'react'

const Review = (props) => {
    return (
        <div className='review-outer-div'>
            <li>
                <div>
                  <h3>{props.title}</h3>
                </div>
                <div>
                   {props.content}
                </div>
                
            </li>
        </div>
    )
}



export default Review
