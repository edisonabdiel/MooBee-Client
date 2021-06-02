import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import './movie-view.scss';

export class MovieView extends React.Component {

    render() {

        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.imgUrl} />
                </div>
                <div className="movie-title">
                    <h2 className="value">{movie.title}</h2>
                </div>
                <h5 className="movie-description">
                    <span className="value">{movie.description}</span>
                </h5>
                <Button variant="info" className="back-button" onClick={() => { onBackClick(null); }}>Back</Button>
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
