//React Modules
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

//REDUX 
import { connect } from 'react-redux';

//Custom Componets
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import MoviesList from '../movie-list/movie-list';
import LoginView from '../login-view/login-view';
import RegisterView from '../login-view/login-view';
import GenreView from '../genre-view/genre-view';
import DirectorView from '../director-view/director-view';
// import ProfileView from '../profile-view/profile-view';

//Actions
import { setUser, setMovies } from '../../actions/actions';

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

//OOP component
const MainView = ({ user, movies }) => {

    // Authenticates user and saves token in local storage
    const onLoggedIn = (authData) => {
        setUser({
            data: authData.user,
            token: authData.token
        }, 'login');
        // LocalStorage will be used as a to retrive current user if needed
        localStorage.setItem('user', JSON.stringify(authData.user));
        localStorage.setItem('token', authData.token);

        getMovies(authData.token);
    }

    useEffect(() => {
        let token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        // console.log(user)
        if (token !== null) {
            getUser(token, (user));
            getMovies(token);
        }
    }, []);

    const getUser = (token, user) => {
        axios.get(`https://moobei.herokuapp.com/users/${user.username}`, {
          headers: {Authorization: `Bearer ${token}`}
        })
        .then( user => {
          setUser({
            data: user.data,
            token: token
          }, 'update');
        })
        .catch( err => {
          console.log(err);
        })
      }

    //Gets movies to an authorised user
    const getMovies = (token) => {
        axios.get('https://moobei.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response.data);
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onLoggedOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser({
            user: null
        });
    }

    console.log(user)
      if (!user) return (
            <Col>
              <LoginView onLoggedIn={user => { onLoggedIn(user) }} />
            </Col>
        )

        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="lg" fixed="top" className="nav-bar" bg="dark" variant="dark">
                        <Navbar.Brand className="logo">MooBee</Navbar.Brand>
                        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/genres">Genres</Nav.Link>
                            <Nav.Link href="/directors">Directors</Nav.Link>
                            <Button variant="outline-danger" size="sm" onClick={() => onLoggedOut()}>Logout</Button>
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
                                <LoginView onLoggedIn={user => {onLoggedIn(user)}} />
                            </Col>

                            if (movies.length === 0) return <div className="main-view" />;

                            return <MoviesList movies={movies} />
                        }} />

                        <Route path="/register" render={() => {
                            if (user) return <Redirect to="/" />
                            return <Col>
                                <RegisterView />
                            </Col>
                        }} />

                        <Route path="/movies/:title" render={({ match, history }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => {onLoggedIn(user)}} />
                                </Col>
                            </Row>
                            return <Col md={8} >
                                <MovieView movie={movies.find(movie => movie.title === match.params.title)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />

                        <Route path="/directors/:name" render={({ match, history }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => {onLoggedIn(user)}} />
                                </Col>
                            </Row>
                            return <Col md={8}>
                                <DirectorView director={movies.find(movie => movie.director === match.params.name).director} onBackClick={() => history.goBack()} />
                            </Col>
                        }
                        } />

                        <Route path="/genres/:name" render={({ match, history }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            if (!user) return <Row>
                                <Col>
                                    <LoginView onLoggedIn={user => {onLoggedIn(user)}} />
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
                                    <LoginView onLoggedIn={user => {onLoggedIn(user)}} />
                                </Col>
                            </Row>
                            return <Col md={8} >
                                <ProfileView logOut={onLoggedOut} user={user} movies={movies} />
                            </Col>
                        }} /> */}

                    </Row>
                </Router>
            </>
        );
    }

const mapStateToProps = state => {
    return {
        movies: state.movies,
        user: state.user
    }
}

export default connect(mapStateToProps)(MainView);
