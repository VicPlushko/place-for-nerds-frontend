import React from 'react'

const TvShowReview = (props) => {

const {
  title,
  content
} = props

    return (
        <div>
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
        </div>
    )
}

export default TvShowReview
