import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        
        return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>{movieData.title}</div>;
    }
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
      title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };

export default MovieCard;