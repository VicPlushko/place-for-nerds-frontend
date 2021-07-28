import React, { Component } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {

    render() {

        const{
            isAuthenticated,
        } = this.props

        return (
            <div className='footer'>
                <div className='signed-in-as'>
                    {isAuthenticated ? 'Welcome back to Place For Nerds' : null}
                </div>
                <div className='tmdb-logo-div'>
                    <div className='recieve-info'>
                        All information and photos recieved from
                    </div>
                        <img className='tmdb-logo' 
                        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' 
                        alt='The Movie Database Logo' 
                        />
                </div>
            </div>
        )
    }
}

 const mapStateToProps = globalState => {
    return {
        isAuthenticated: globalState.userReducer.isAuthenticated,
    }
}
export default connect(mapStateToProps)(Footer)
