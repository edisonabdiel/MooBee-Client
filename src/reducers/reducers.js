import { combineReducers } from 'redux';

import { 
    SET_MOVIES, 
    SET_USER, 
    SET_FILTER, 
    UPDATE_USER, 
    DELETE_USER, 
    SET_FAVOURITE,
     UPDATE_FAVOURITE 
    } from '../actions/actions';

import state from '../state/state';

const initialState = state;

const movies = (state = initialState.movies, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        default:
            return state;
    }
}

const user = (state = initialState.user, action) => {
    switch (action.type) {
        case SET_USER:
            return action.meta === 'login' || action.meta === 'update' || action.meta === 'delete'
        ? action.payload
        : {
            ...state,
            data: action.payload
          }
        case UPDATE_USER:
            return action.payload;
        case DELETE_USER:
            return action.payload;
        default:
            return state;
    }
}

const favourite = (state = initialState.favourites, action) => {
    switch (action.type) {
        case SET_FAVOURITE:
            return action.value;
        case UPDATE_FAVOURITE:
            return action.value;
        default:
            return state;
    }
}

const visibilityFilter = (state = initialState.movieFilter, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

const appReducers = combineReducers({
    movies,
    user,
    favourite,
    visibilityFilter
});

export default appReducers;
