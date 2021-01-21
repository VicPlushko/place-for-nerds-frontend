import React from 'react'

const LastEpisode = (props) => {
    return (
        <div>
            <h3>Last Episode:</h3>
            <div>
                <ul>
                    <li><strong>Episode Name:</strong> {this.props.name}</li>
                    <li><strong>Air Date:</strong> {this.props.air_date}</li>
                    <li><strong>Season Number:</strong> {this.props.season}</li>
                    <li><strong>Episode Number:</strong> {this.props.episode}</li>
                </ul>
            </div>
        </div>
    )
}

export default LastEpisode
