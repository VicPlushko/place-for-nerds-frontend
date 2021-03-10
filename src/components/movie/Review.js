import React from 'react'

const Review = (props) => {
    return (
        <div>
            <li>
                {props.title}
                {props.content}
            </li>
        </div>
    )
}

export default Review
