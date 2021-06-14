import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

//Custom Componets
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import LoginView from '../login-view/login-view';
import RegisterView from '../login-view/login-view';
import GenreView from '../genre-view/genre-view';
import DirectorView from '../director-view/director-view';
// import ProfileView from '../profile-view/profile-view';

// React-Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Styles
import './main-view.scss';

// Images
import beeLogo from '../../assets/bee.png';


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
            user: authData.user.username
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
    getMovies = (token) => {
        axios.get('https://moobei.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response)
                this.setState({
                    movies: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // componentDidMount(token) {
    //     axios.get('https://moobei.herokuapp.com/movies', {
    //         headers: { Authorization: `Bearer ${token}` }
    //     })
    //         .then(response => {
    //             this.setState({
    //                 movies: response.data
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
    }

    render() {
        const { movies, user } = this.state;

        if (!user) return (
            <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
        )

        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-bar" bg="dark" variant="dark">
                        <Navbar.Brand className="logo">MooBee</Navbar.Brand>
                        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                            <Nav.Link href="#directors">Directors</Nav.Link>
                            <Nav.Link href="#genres">Genres</Nav.Link>
                            <Button variant="outline-danger" size="sm" onClick={() => this.onLoggedOut()}>Logout</Button>
                        </Nav>
                        <Form inline>
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    <Row className="main-view justify-content-md-center">

                        <Route exact path="/" render={() => {
                            if (!user) return
                            <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>

                            if (movies.length === 0) return <div className="main-view" />;

                            return movies.map(movie => (
                                <Col xs={12} sm={6} md={4} lg={4} key={movie.id}>
                                    <MovieCard
                                        movieData={movie}
                                        key={movie._id}
                                    />)
                                </Col>
                            ))
                        }} />

                        <Route path="/register" render={() => {
                            if (user) return <Redirect to="/" />
                            return <Col>
                                <RegisterView />
                            </Col>
                        }} />

                        <Route path="/movies/:title" render={({ match }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                                </Col>
                            </Row>
                            return <Col md={8} >
                                <MovieView movie={movies.find(movie => movie.title === match.params.title)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />

                        <Route path="/directors/:name" render={({ match }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                                </Col>
                            </Row>
                            return <Col md={8}>
                                <DirectorView director={movies.find(m => m.directors.name === match.params.name).directors} onBackClick={() => history.goBack()} />
                            </Col>
                        }
                        } />

                        <Route path="/genres/:name" render={({ match }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                                </Col>
                            </Row>
                            return <Col md={8} >
                                <GenreView genre={movies.find(g => g.genres.name === match.params.name).genres} movies={movies} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />

                        {/* <Route path="/users/:username" render={({ }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                                </Col>
                            </Row>
                            return <Col md={8} >
                                <ProfileView logOut={this.onLoggedOut} user={user} movies={movies} />
                            </Col>
                        }} /> */}

                    </Row>
                </Router>
            </>
        );
    }
}

export default MainView;
