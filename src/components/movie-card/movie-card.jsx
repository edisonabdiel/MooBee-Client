import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

import './movie-card.scss';

class MovieCard extends React.Component {
  render() {
    const { movieData } = this.props;

    return (
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={movieData.imgUrl} />
        <Card.Body className="card-body">
          <Card.Title>{movieData.title}</Card.Title>
          <Card.Text>{movieData.description}</Card.Text>
          <Link to={`/movies/${movieData.title}`}>
            <Button variant="dark">Open</Button>
          </Link>
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
};

export default MovieCard;