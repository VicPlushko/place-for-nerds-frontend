import React from 'react'

const Review = (props) => {
    return (
        <div>
           <h1>Reviews</h1>
            <ul>
                <p>{props.reviews}</p>
            </ul> 
        </div>
    )
}

export default Review
