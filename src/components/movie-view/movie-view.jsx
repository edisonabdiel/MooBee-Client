import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import './movie-view.scss';

const MovieView = ({ movie, onBackClick}) => {
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
                <Button variant="info" className="back-button" onClick={() => { onBackClick(); }}>Back</Button>

                <Link to={`/directors/${movie.director.name}`}>
                    <Button variant="dark">Director</Button>
                </Link>
                <Link to={`/genres/${movie.genre.name}`}>
                    <Button variant="dark">Genre</Button>
                </Link>
            </div>
        );
    }

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imgUrl: PropTypes.string,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};

export default MovieView;
