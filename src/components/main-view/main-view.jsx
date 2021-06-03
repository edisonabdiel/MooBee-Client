import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import  LoginView  from '../login-view/login-view';
import { RegisterView } from '../login-view/login-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './main-view.scss';


class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    // Authenticates user and saves token in local storage
    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.username,
            token: authData.token
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.username);
        this.getMovies(authData.token);
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }

    //Gets movies to an authorised user
    getMovies(token) {
        axios.get('https://moobei.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie, user } = this.state;

        if (this.state.user === null) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view" />;

        return (
            <>
                <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-bar" bg="dark" variant="dark">
                    <Navbar.Brand className="logo" href="#home">MooBee</Navbar.Brand>
                    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <Nav.Link href="#directors">Directors</Nav.Link>
                        <Nav.Link href="#genres">Genres</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                {/* <LoginView /> */}
                <Row className="main-view justify-content-md-center">
                    {selectedMovie
                        ? (
                            <Col md={8} >
                                <MovieView
                                    movie={selectedMovie}
                                    onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        )
                        : movies.map(movie => (
                            <Col xs={12} sm={6} md={4} lg={4} >
                                <MovieCard
                                    movieData={movie}
                                    key={movie._id}
                                    onMovieClick={(movie) => { this.setSelectedMovie(movie) }}
                                />)
                            </Col>
                        ))
                    }
                </Row>
            </>
        );
    }
}

export default MainView;