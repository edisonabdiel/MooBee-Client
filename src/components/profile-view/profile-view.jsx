import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Component 
import axios from 'axios'

import { connect } from 'react-redux'

// React-bootdtrap components 
import { Row, Col, Button } from 'react-bootstrap'
import { MovieCard } from '../movieCard/movieCard'

import './profileView'

const mapStateToProps = state => {
  const { user, movies } = state;
  return { user, movies };
}

const ProfileView = ({ user, token, movies, onBackClick }) => {
  const [userFavorites, setUserFavorites] = useState(() => {
    const favorites = []

    movies.map(m => {
      user.data.movies.indexOf(m._id) !== -1 ? favorites.push(m) : false;
    })

    return favorites;
  });

  return (
    <>
      <Button className="btn-light border-dark mr-2 " onClick={onBackClick}>Back</Button>
      <Row>
        {
          userFavorites.length === 0
            ? <Col><h2>No have no favorites... </h2></Col>
            : userFavorites.map((m, i) => (
              <Col key={`col-${i}`}>
                <MovieCard key={`movie-${i}`} movie={m} />
              </Col>
            ))
        }
      </Row>
      </>
        )
        }

ProfileView.prototypes = {
          user: PropTypes.object,
  token: PropTypes.string,
  onBackClick: PropTypes.func,
}

export default connect(mapStateToProps)(ProfileView);
