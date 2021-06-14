import React from 'react';
import PropTypes from 'prop-types';

// React-bootstrap components 
import { Button } from 'react-bootstrap';

const DirectorView = ({ director, onBackClick }) => {

  console.log(director)
  return (
    <>
      <h2>{director.name}</h2>
      <h3>{director.bio}</h3>
      <h3>{director.born}</h3>
      <Button onClick={onBackClick}>Back</Button>
    </>
  )
}

DirectorView.prototypes = {
  director: PropTypes.object,
  onBackClick: PropTypes.func
}

export default DirectorView;
