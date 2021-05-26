import React from 'react';
import MovieCard from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: 'https://fanart.tv/fanart/movies/278/movieposter/the-shawshank-redemption-5223c8231b88e.jpg' },
                { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: 'https://image.tmdb.org/t/p/original/r1CesMGmV4EKauh5c7PtXBjWBZj.jpg' }
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        console.log(this.state)
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

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