import React, { Component } from 'react'
import SingleMovie from '../../components/movie/SingleMovie'
import Actor from '../../components/actor/Actor'
import MovieReviewContainer from './MovieReviewContainer'

class SingleMovieContainer extends Component {
    

    state = {
        title: "",
        release_date: "",
        synopsis: "",
        poster: "",
        movie_id: "",
        budget: "",
        revenue: "",
        runtime: "",
        genres: [],
        productionCompanies: [],
        cast: [],
        backdrop: ""
    }

    componentDidMount() {

        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
        // console.log('single movie container props is', this.props)
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

         
        return (
            <div>
               <SingleMovie 
               key={this.state.movie_id}
               title={this.state.title} 
               release_date={this.state.release_date} 
               synopsis={this.state.synopsis} 
               poster={this.state.poster} 
               movie_id={this.state.movie_id} 
               budget={this.state.budget} 
               revenue={this.state.revenue} 
               runtime={this.state.runtime} 
               genres={this.state.genres} 
               productionCompanies={this.state.productionCompanies} 
               cast={this.state.cast} 
               backdrop={this.state.backdrop}/>
            <div className='singleView' id='movie-reviews'>
                <MovieReviewContainer key={this.state.movie_id} movie_id={this.state.movie_id}/>
            </div>
            </div>
        )
    }
}

function formatAsCurrency(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
export default SingleMovieContainer
