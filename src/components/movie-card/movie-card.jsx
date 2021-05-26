import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
<<<<<<< HEAD
        
=======
>>>>>>> eb6fca26ccb371816f9729e21880be3d4e7aeef0
        return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>{movieData.Title}</div>;
    }
}

export default MovieCard;