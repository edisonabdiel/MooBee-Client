import React from 'react';
import PropTypes from 'prop-types';

// React-bootstrap components 
import { Button, Row, Col } from 'react-bootstrap';

const DirectorView = ({ movies, director, onBackClick }) => {

  const moviesByDirector = movies.filter(movie => movie.director === directors.name)

  console.log(director);
  return (
    <>
      <Row>
        <Col>
          <h2>{director.name}</h2>
          <h3>{director.bio}</h3>
          <h3>{director.born}</h3>
          <Button onClick={onBackClick}>Back</Button>
        </Col>
        <Col>
          <div>
            {moviesByDirector.map((m, i) => <h3 key={i} >{m.title}</h3>)}
          </div>
        </Col>
      </Row>
    </>
  )
}

DirectorView.prototypes = {
  director: PropTypes.object,
  onBackClick: PropTypes.func
}

export default DirectorView;
