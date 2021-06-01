import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegisterView } from '../login-view/login-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null
        };
    }

    componentDidMount() {
        axios.get('https://moobei.herokuapp.com/movies')
            .then(res => {
                console.log(res)
                this.setState({
                    movies: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <>
                <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bar" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">MooBee</Navbar.Brand>
                    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <Nav.Link href="#features">Directors</Nav.Link>
                        <Nav.Link href="#pricing">Genres</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <Row className="main-view justify-content-md-center">
                    {selectedMovie
                        ? (
                            <Col md={8} >
                                <MovieView
                                    movie={selectedMovie}
                                    onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        )
                        : (
                            <Col md={6} >
                                {movies.map(movie => (
                                    <MovieCard
                                        movieData={movie}
                                        key={movie._id}
                                        onMovieClick={(movie) => { this.setSelectedMovie(movie) }}
                                    />))}
                            </Col>
                        )
                    }
                </Row>
            </>
        );
    }
}

export default MainView;