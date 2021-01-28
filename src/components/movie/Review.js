import React from 'react'

const Review = (props) => {
    return (
        <div>
           <h1>Reviews</h1>
            <ul>
                <li>{props.content}</li>
            </ul> 
        </div>
    )
}

export default Review
