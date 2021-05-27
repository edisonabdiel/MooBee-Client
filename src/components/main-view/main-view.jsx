import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';


class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null
        };
    }

    componentDidMount() {
        axios.get('https://moobei.herokuapp.com/movies')
            .then(res => {
                console.log(res)
                this.setState({
                    movies: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView
                        movie={selectedMovie}
                        onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard
                            movieData={movie}
                            key={movie._id}
                            onMovieClick={(movie) => { this.setSelectedMovie(movie) }}
                        />))
                }
            </div>
        );
    }
}

export default MainView;