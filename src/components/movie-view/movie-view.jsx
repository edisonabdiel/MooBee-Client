import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

    render() {

        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.imgUrl} />
                </div>
                <div className="movie-title">
                    <span className="value">{movie.title}</span>
                </div>
                <div className="movie-description">
                    <span className="value">{movie.description}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back</button>

            </div>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };
