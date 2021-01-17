import React, { Component } from 'react'
import '../App.css'
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
        backdrop: ""
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
                cast: data.credits.cast.map(actor => <div className='castGrid'>
                    <img className='actor-pic' src={actorPicUrl + actor.profile_path} alt=""></img>
                    <div className='actor-name'>{actor.name} - {actor.character}</div>
                    </div>),
                
            })
        })
        
    }
    
    render() {

         
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
               <SingleMovie title={this.state.title} release_date={this.state.release_date} synopsis={this.state.synopsis} poster={this.state.poster} movie_id={this.state.movie_id} budget={this.state.budget} revenue={this.state.revenue} runtime={this.state.runtime} genres={this.state.genres} productionCompanies={this.state.productionCompanies} cast={this.state.cast} backdrop={this.state.backdrop}/>
            </div>
        )
    }
}

function formatAsCurrency(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
export default SingleMovieContainer
