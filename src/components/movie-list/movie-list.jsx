import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter/visibility-filter';
import { MovieCard } from '../movie-card/movie-card';

import Col from 'react-bootstrap';

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter };
};

const MoviesList = (props) => {
    const { movies, visibilityFilter } = props;
    let filteredMovies = movies;

    if (visibilityFilter !== '') {
        filteredMovies = movies.filter(m => m.title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if (!movies) return <div className="main-view" />;

    return <>
        <Col md={12} style={{ margin: '1em' }}>
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Col>
        {filteredMovies.map(movie => (
            <Col xs={12} sm={6} md={4} lg={4} key={movie.id}>
                <MovieCard
                    movieData={movie}
                    key={movie._id}
                />)
            </Col>
        ))};
        </>
}

export default connect(mapStateToProps)(MoviesList);
