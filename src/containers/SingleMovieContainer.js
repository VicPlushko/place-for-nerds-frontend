import React, { Component } from 'react'
import SingleMovie from '../components/SingleMovie'
import Navigation from '../components/Navigation'

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
        actorPic: []
    }

    componentDidMount() {
        const actorPicUrl = 'http://image.tmdb.org/t/p/w92'
        console.log('single movie container props is', this.props)
        const movieUrl = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=418fbea2f4a11b1a7fe771ed7997a691&language=en-US&append_to_response=credits`
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                title: data.title,
                release_date: data.release_date,
                synopsis: data.overview,
                poster: data.poster_path,
                movie_id: data.id,
                budget: formatAsCurrency(data.budget),
                revenue: formatAsCurrency(data.revenue),
                runtime: data.runtime,
                genres: data.genres.map(genre => <li>{genre.name}</li>),
                productionCompanies: data.production_companies.map(company => <li>{company.name}</li>),
                cast: data.credits.cast.map(actor => <li><img className='actor-pic' src={actor.profile_path + actorPicUrl} alt=""></img>{actor.name} - {actor.character}</li>),
                
            })
        })
        
    }
    
    render() {

         
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
               <SingleMovie title={this.state.title} release_date={this.state.release_date} synopsis={this.state.synopsis} poster={this.state.poster} movie_id={this.state.movie_id} budget={this.state.budget} revenue={this.state.revenue} runtime={this.state.runtime} genres={this.state.genres} productionCompanies={this.state.productionCompanies} cast={this.state.cast} />
            </div>
        )
    }
}

function formatAsCurrency(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
export default SingleMovieContainer
