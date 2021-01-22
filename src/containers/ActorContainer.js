import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import SingleActor from '../components/actor/SingleActor'
import MovieCredits from '../components/actor/MovieCredits'
import TvCredits from '../components/actor/TvCredits'


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
                tvCredits: data.tv_credits.cast.map((show, i) => {
                    return <TvCredits key={i} show_id={show.id} poster={show.poster_path} title={show.name} release_date={show.first_air_date} character={show.character} />
                }), 
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
               poster={this.state.picture} 
               homepage={this.state.homepage}
               movieCredits={this.state.movieCredits} 
               tvCredits={this.state.tvCredits} />
            </div>
        )
    }
}
export default ActorContainer
