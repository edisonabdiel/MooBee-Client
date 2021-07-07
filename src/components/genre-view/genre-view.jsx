import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Button } from 'react-bootstrap';

import MovieCard from '../movie-card/movie-card';

const  GenreView = ({ movies, history, onBackClick }) => {
  return (
    <>
      <Button variant="light" onClick={onBackClick}> Back </Button>
      <div>
        <pre>{movies[0].genre.name}</pre>
        <pre>{movies[0].genre.description}</pre>
      </div>
      <Container>
        <Row>
          {
            movies.map( (movie, i) => (
              <Col xs={4} lg={3} key={i} className="p-2">
                <MovieCard key={m._id} movie={movie} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

GenreView.propType = {
  movies: PropTypes.object.isRequired,
  onBackClick: PropTypes.func.isRequired
}

export default GenreView;
