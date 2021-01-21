import React, { Component } from 'react'
import '../App.css'
import SingleShow from '../components/SingleShow'
import LastEpisode from '..components/LastEpisode'
import Navigation from '../components/Navigation'
import Actor from '../components/Actor'

class SingleShowContainer extends Component {

    state = {
        title: "",
        release_date: "",
        synopsis: "",
        created_by: "",
        poster: "",
        homepage: "",
        tagline: "",
        show_id: "",
        number_of_seasons: "",
        number_of_episodes: "",
        last_episode: "",
        genres: [],
        productionCompanies: [],
        networks: [],
        cast: [],
        backdrop: ""
    }

    componentDidMount() {
        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
        // console.log('single tv show container props is', this.props)
        const movieUrl = `https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=${MOVIES_KEY}&language=en-US&append_to_response=credits`
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                backdrop: data.backdrop_path,
                title: data.name,
                release_date: data.first_air_date,
                synopsis: data.overview,
                poster: data.poster_path,
                show_id: data.id,
                homepage: data.homepage,
                tagline: data.tagline,
                number_of_seasons: data.number_of_seasons,
                number_of_episodes: data.number_of_episodes,
                last_episode: data.last_episode_to_air,
                genres: data.genres.map(genre => genre.name).join(', '),
                created_by: data.created_by.map(show_creator => show_creator.name).join(', '),
                productionCompanies: data.production_companies.map(company => <li>{company.name}</li>),
                cast: data.credits.cast.map((actor, i) => {
                    return <Actor key={i} id={actor.id} name={actor.name} character={actor.character} poster={actor.profile_path}/>
                })
            })
        })
        
    }
    render() {
        return (
            <div>
                <div>
                <header className='App-header'>
                    <Navigation/>
                </header>
                    <SingleShow 
                    title={this.state.title} 
                    release_date={this.state.release_date} 
                    synopsis={this.state.synopsis} 
                    poster={this.state.poster} 
                    show_id={this.state.show_id} 
                    show_creator={this.state.created_by} 
                    homepage={this.state.homepage} 
                    tagline={this.state.tagline} 
                    seasons={this.state.number_of_seasons} 
                    episodes={this.state.number_of_episodes} 
                    last_episode={this.state.last_episode}
                    genres={this.state.genres} 
                    productionCompanies={this.state.productionCompanies} 
                    cast= {this.state.cast} 
                    backdrop={this.state.backdrop}
                    />

                    <LastEpisode 
                    key={data.last_episode_to_air.id} 
                    name={data.last_episode_to_air.name} 
                    air_date={data.last_episode_to_air.air_date} 
                    season={data.last_episode_to_air.season_number} 
                    episode={data.last_episode_to_air.episode_number}
                    />
               </div>
            </div>
        )
    }
}

export default SingleShowContainer
