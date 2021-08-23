<p align="center">
   SAP built with React + Bootstrap. It has its own dedicated API built with the MERN stack.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#dev-dependencies">Dev Dependencies</a></li>
    <li><a href="#why-react">Why React?</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Objective:

- Build a web application that provides users with access to information about different movies, genres, directors and actors of the 1980s. Users are able to register, update their personal information, deregister and create a list of "Favorites" and "To Watch" movies.

### User Stories:

- As a user, I want to be able to receive information on movies, genres, directors and actors of the 1980s so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to have a "Favorites" list and a "To Watch" list, and add and remove movies from them.
- As a user, I want to access a simple web application with a minimalist interface, displaying only essential information.
- As a user, I want to be able to create a profile so I can save data about my favorite movies.
- As a user, I want to be able to update my personal data.
- As a user, I want to be able to deregister my profile from the web application database.

### Key Features:

- Return a list of movies of the 80's to the user.
- Return data about a single movie by title to the user.
- Return data about movie genres to the user.
- Return data about directors and actors to the user.
- Allow new users to register.
- Allow users to update their data by username.
- Allow existing users to deregister by username.
- Allow users to add and remove movies to their "Favorites" list by movie ID.
- Allow users to add and remove movies to their "To Watch" list by movie ID.
- Secure access to the API data: authentication and authorization with HTTP and JSON Web Token.

## Built With

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Netlify](https://www.netlify.com/)

## Dependencies

- axios
- parcel v2
- prop-types
- react
- react-bootstrap
- react-dom
- react-hook-form
- react-redux
- react-router-dom
- redux
- redux-devtools-extension

## Dev Dependencies

- eslint

## Why React?

For the myVHS application, React would certainly be the best choice. It is not a particularly heavy application and does not have complex user interfaces, nor does it have to display a large amount of data to the user from the server-side. Angular (and the MEAN stack) is therefore out of the question, as it would slow down the workflow.

On the other hand, Vue.js (and the MEVN stack) could be considered for the project, as being lightweight, progressive and versatile, it would allow to start easily and then keep adding enhancements in the future. However, I think React (and the MERN stack) would be better suited to the requirements of this application, mainly because it is currently the most popular framework designed for visualizing user interfaces.

By having its virtual DOM, it will allow the myVHS application to render views faster and more efficiently. We will have to load a lot of data from the server-side, so it is better to be certain from the beginning that the framework to be used will be able to deal with the high database load by users in the future.

Another advantage is that React prioritizes the user experience, which is one of the main goals of the myFlix application: to display in a simple and intuitive way information about movies to the user.
