import React, { Component } from 'react'
import SingleShow from '../../components/tv_show/SingleShow'
import Actor from '../../components/actor/Actor'
import TvShowReviewContainer from '../../containers/tv_shows/TvShowReviewContainer'
import moment from 'moment'

class SingleShowContainer extends Component {

    state = {
        title: '',
        release_date: '',
        synopsis: '',
        created_by: '',
        poster: '',
        homepage: '',
        tagline: '',
        show_id: '',
        number_of_seasons: '',
        number_of_episodes: '',
        genres: [],
        productionCompanies: [],
        networks: [],
        cast: [],
        backdrop: ''
    }

    componentDidMount() {
        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
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
        
        const {
            title,
            release_date,
            synopsis,
            created_by,
            poster,
            homepage,
            tagline,
            show_id,
            number_of_seasons,
            number_of_episodes,
            genres,
            productionCompanies,
            networks,
            cast,
            backdrop    
        } = this.state

        const backdropUrl = `http://image.tmdb.org/t/p/original${backdrop}`

        return (
            <div>
                <SingleShow
                key={show_id}
                title={title} 
                release_date={moment(release_date).format('MM-DD-YYYY')} 
                synopsis={synopsis} 
                poster={poster} 
                show_id={show_id} 
                show_creator={created_by} 
                homepage={homepage} 
                tagline={tagline} 
                seasons={number_of_seasons} 
                episodes={number_of_episodes} 
                genres={genres} 
                network={networks}
                productionCompanies={productionCompanies} 
                cast= {cast} 
                backdrop={backdrop}
                />
                <div className='review-div' style={{backgroundImage: 'url(' + backdropUrl + ')'}} id='movie-reviews'>
                    <TvShowReviewContainer 
                    key={show_id} 
                    show_id={show_id} 
                    showTitle={title}
                    backdrop={backdrop}
                    />
                </div>
            </div>
        )
    }
}

export default SingleShowContainer
