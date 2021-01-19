import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import SingleActor from '../components/SingleActor'
import MovieCredits from '../components/MovieCredits'


class ActorContainer extends Component {

    state = {
        id: "",
        name: "",
        birthday: "",
        placeOfBirth: "",
        biography: "",
        picture: "",
        homepage: "",
        movie_id: "",
        movieCredits: [],
        tvCredits: []
    }

    componentDidMount() {
        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
        const actorPic = 'http://image.tmdb.org/t/p/w185'
        // console.log('actor container props is', this.props)
        const actorUrl = `https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=${MOVIES_KEY}&language=en-US&append_to_response=movie_credits,tv_credits`
        fetch(actorUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                id: data.id,
                name: data.name,
                birthday: data.birthday,
                placeOfBirth: data.place_of_birth,
                biography: data.biography,
                picture: data.profile_path,
                homepage: data.homepage,
                movie_id: data.movie_credits.cast.map(movie => movie.id),
                movieCredits: data.movie_credits.cast.map((movie, i) => {
                    return <MovieCredits key={i} movie_id={movie.id} poster={movie.poster_path} title={movie.title} release_date={movie.release_date} character={movie.character} />
                }),
                    // <div className='castGrid'>
                    //     <Link className='poster-link' to={`/movies/${movie.id}`}><img className='movie-poster' src={actorPic + movie.poster_path} alt=""></img></Link>
                    // <div className='movie-name'>{movie.title} - {getYear(`${movie.release_date}`)}</div>
                    // <div className='character-name'>{movie.character}</div>
                    // </div>),
                tvCredits: data.tv_credits.cast.map(show => 
                    <div className='castGrid'><Link className='poster-link'><img className='show-poster' src={actorPic + show.poster_path} alt=""></img></Link>
                    <div className='movie-name'>{show.name} - {getYear(`${show.first_air_date}`)}</div>
                    <div className='character-name'>{show.character}</div>
                    </div>)
            })
        })
        
    }

    render() {
        return (
            <div>
                <header className='App-header'>
                    <Navigation/>
                </header>
               <SingleActor 
               id={this.state.id} 
               name={this.state.name} 
               birthday={this.state.birthday} 
               placeOfBirth={this.state.placeOfBirth} 
               biography={this.state.biography} 
               picture={this.state.picture} 
               homepage={this.state.homepage}
               movieCredits={this.state.movieCredits} 
               tvCredits={this.state.tvCredits} />
            </div>
        )
    }
}

const getYear = (x) => {
   return x.split('-')[0]
}

export default ActorContainer
