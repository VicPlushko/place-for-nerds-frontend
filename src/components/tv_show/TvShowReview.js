import React from 'react'

const TvShowReview = (props) => {
    return (
        <div>
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
        </div>
    )
}

export default TvShowReview
