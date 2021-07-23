import React, { Component } from 'react'
import SingleMovie from '../../components/movie/SingleMovie'
import Actor from '../../components/actor/Actor'
import MovieReviewContainer from './MovieReviewContainer'
import { formatAsCurrency } from '../../utitlity/util'
import moment from 'moment'

class SingleMovieContainer extends Component {
    

    state = {
        title: '',
        release_date: '',
        synopsis: '',
        poster: '',
        movie_id: '',
        budget: '',
        revenue: '',
        runtime: '',
        genres: [],
        productionCompanies: [],
        cast: [],
        backdrop: ''
    }

    componentDidMount() {
        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
        const movieUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${MOVIES_KEY}&language=en-US&append_to_response=credits`
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                backdrop: data.backdrop_path,
                title: data.title,
                release_date: data.release_date,
                synopsis: data.overview,
                poster: data.poster_path,
                movie_id: data.id,
                budget: formatAsCurrency(data.budget),
                revenue: formatAsCurrency(data.revenue),
                runtime: data.runtime,
                genres: data.genres.map(genre => genre.name).join(', '),
                productionCompanies: data.production_companies.map(company => <li>{company.name}</li>),
                cast: data.credits.cast.map((actor, i) => {
                    return <Actor key={i} id={actor.id} name={actor.name} character={actor.character} poster={actor.profile_path}/>
                }),
            })
        })
        
    }
    
    render() {

        const {
            title,
            release_date,
            synopsis,
            poster,
            movie_id,
            budget,
            revenue,
            runtime,
            genres,
            productionCompanies,
            cast,
            backdrop
        } = this.state
        
        const backdropUrl = `http://image.tmdb.org/t/p/original${backdrop}`

        return (
            <div>
               <SingleMovie 
               key={movie_id}
               title={title} 
               release_date={moment(release_date).format('MM-DD-YYYY')} 
               synopsis={synopsis} 
               poster={poster} 
               movie_id={movie_id} 
               budget={budget} 
               revenue={revenue} 
               runtime={runtime} 
               genres={genres} 
               productionCompanies={productionCompanies} 
               cast={cast} 
               backdrop={backdrop}/>
            <div className='review-div' style={{backgroundImage: 'url(' + backdropUrl + ')'}} id='movie-reviews'>
                <MovieReviewContainer 
                key={movie_id} 
                movie_id={movie_id} 
                movieTitle={title}
                backdrop={backdrop}/>
            </div>
            </div>
        )
    }
}

export default SingleMovieContainer
