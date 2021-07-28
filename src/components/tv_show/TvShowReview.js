import React from 'react'

const TvShowReview = (props) => {

const {
  title,
  content
} = props

    return (
      <div>
        <div className='review-content-div'>
          <div className='review-title'>
            <h3>{title}</h3>
          </div>
          <div className='review-content'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
}

export default TvShowReview
