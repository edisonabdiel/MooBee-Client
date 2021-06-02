import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        
      return (
        <Card className="card">
          <Card.Img className="card-img" variant="top" src={movieData.imgUrl} />
          <Card.Body className="card-body">
            <Card.Title>{movieData.title}</Card.Title>
            <Card.Text>{movieData.description}</Card.Text>
            <Button onClick={() => onMovieClick(movieData)} variant="info" >View</Button>
          </Card.Body>
          </Card>
        )
    }
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };

export default MovieCard;