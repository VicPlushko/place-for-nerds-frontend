import React, { Component } from 'react'
import SingleMovie from '../components/SingleMovie'
import Navigation from '../components/Navigation'

class SingleMovieContainer extends Component {
    

    state = {
        title: "",
        release_date: "",
        synopsis: "",
        poster: ""
    }

    componentDidMount() {
        console.log('single movie container props is', this.props)
        const movieUrl = `http://localhost:3001/movies/${this.props.match.params.id}`
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                title: data.title,
                release_date: data.release_date,
                synopsis: data.synopsis,
                poster: data.poster
            })
        })
    }
    
    render() {
         
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
               <SingleMovie title={this.state.title} release_date={this.state.release_date} synopsis={this.state.synopsis} poster={this.state.poster}/>
            </div>
        )
    }
}

export default SingleMovieContainer
