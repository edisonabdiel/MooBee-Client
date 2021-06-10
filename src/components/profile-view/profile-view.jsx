import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// React-Bootstrap components
import { Col, Button, Form, Row, Container } from 'react-bootstrap';

// Styles
import './profile-view.scss';


const ProfileView = ({ movies, logOut }) => {

    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState([]);
    const [isSuccessful, setisSuccessful] = useState(false);

    //Username and twk
    const localUsername = localStorage.getItem('user');
    const token = localStorage.getitem('token');

    useEffect(() => {
        axios.get(`https://moobei.herokuapp.com/users/${localUsername}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                const userData = res.data;
                setUser(userData);
            }).catch((e) => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        getFavs(user.FavoriteMovies)
    }, [])

    const getFavs = (favs) => {
        let favoriteMovieList = [];
        movies.forEach((movie) => {
            favs.includes(movie._id) ? favoriteMovieList.push(movie) : favoriteMovieList
        });
        setFavorites(favoriteMovieList)
    };

    const toggleFav = (movieId) => {
        user.FavoriteMovies.includes(movieId) ?
            axios.delete(`https://moobei.herokuapp.com/users/${localUsername}/movies/${movieId}`, { headers: { "Authorization": `Bearer ${token}` } }
            ).then((res) => {
                getFavs(res.data.FavoriteMovies)
            }).catch((e) => { console.log(e) })

            :

            axios.put(`https://myflix-0001.herokuapp.com/users/${localUsername}/movies/${movieId}`, {}, { headers: { "Authorization": `Bearer ${token}` } }
            ).then((res) => {
                ToggleFavorites(res.data.FavoriteMovies)
                getFavs(res.data.FavoriteMovies)
            }).catch((e) => {
                console.log(e.message)
            })
    }

    const updateUser = (e) => {
        e.preventDefault();
        axios.put(`https://moobei.herokuapp.com/users/${user._id}`, {
            name: name,
            username: username,
            email: email,
            password: password
        }, { headers: { "Authorization": `Bearer ${token}` } },
        ).then((res) => {
            res.status == 200 ? setItsSuccesful(true) : setisSuccessful(false);
        }).catch((e) => {
            console.error('error trying to edit:' + e)
        })
    }

    const handleAccountDelete = () => {
        axios.delete(`https://moobei.herokuapp.com/users/${user.username}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((res) => {
                console.info(res);
                logOut();
            })
    }

}

return (
    <>
        <Row className="justify-content-md-center" >
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" defaultValue={user.name} onChange={e => ValidateUser(e.target.value, "Name")} />

                </Form.Group>

                {Object.keys(nameErr).map((key) => {
                    return <div className="error-message" >{nameErr[key]}</div>
                })}

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" defaultValue={user.username} onChange={e => ValidateUser(e.target.value, "username")} />
                </Form.Group>

                {Object.keys(usernameErr).map((key) => {
                    return <div className="error-message" >{usernameErr[key]}</div>
                })}

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} onChange={e => ValidateUser(e.target.value, "email")} />
                </Form.Group>

                {Object.keys(emailErr).map((key) => {
                    return <div className="error-message" >{emailErr[key]}</div>
                })}

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => ValidateUser(e.target.value, "password")} />
                </Form.Group>

                <Form.Group controlId="password-repeat">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat Password" defaultValue={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)} />
                </Form.Group>

                {Object.keys(passwordErr).map((key) => {
                    return <div className="m-1" >{passwordErr[key]}</div>
                })}

                <Link to="/profile">
                    <Button onClick={updateUser} variant="dark" type="submit" className="mt-3 mr-3">
                        Save Changes
                    </Button>
                </Link>
                <Button variant="danger" onClick={handleAccountDelete} type="submit" >Delete Account</Button>
            </Form>
        </Row>
    </>
)

export default ProfileView;
