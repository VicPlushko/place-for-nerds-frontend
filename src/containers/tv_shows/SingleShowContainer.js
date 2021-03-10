import React, { Component } from 'react'
import SingleShow from '../../components/tv_show/SingleShow'
import Actor from '../../components/actor/Actor'

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
                genres: data.genres.map(genre => genre.name).join(', '),
                networks: data.networks.map(network => <li>{network.name}</li>),
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
                    <SingleShow
                    key={this.state.show_id}
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
                    genres={this.state.genres} 
                    network={this.state.networks}
                    productionCompanies={this.state.productionCompanies} 
                    cast= {this.state.cast} 
                    backdrop={this.state.backdrop}
                    />
            </div>
        )
    }
}

export default SingleShowContainer
