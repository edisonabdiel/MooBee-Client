// ACTIONS TYPES:
export const SET_MOVIES = 'SET_MOVIES';
export const SET_USER = 'SET_USER';
export const SET_FILTER = 'SET_FILTER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_FAVOURITE = 'SET_FAVOURITE';
export const UPDATE_FAVOURITE = 'UPDATE_FAVOURITE';

// ACTIONS:
export const setMovies = (value) => {
  console.log('SET_MOVIES action triggered');
  return {
    type: SET_MOVIES,
    value
  };
}

export const setUser = (value) => {
  console.log('SET_USER action triggered');
  return {
    type: SET_USER,
    value
  };
}

export const setFilter = (value) => {
  console.log('SET_FILTER actions triggered');
  return {
    type: SET_FILTER,
    value
  };
}

export const updateUser = (value) => {
  console.log('UPDATE_USER action triggered');
  return {
    type: UPDATE_USER,
    value
  };
}

export const deleteUser = (index) => {
  console.log('DELETE_USER action triggered');
  return {
    type: DELETE_USER,
    index
  }
}

export const setFavourite = (value) => {
  console.log('SET_FAVOURITE action triggered');
  return {
    type: 'SET_FAVOURITE',
    value
  }
}

export const updateFavorite = (value) => {
  console.log('UPDATE_FAVOURITE actions triggered');
  return {
    type: 'UPDATE_FAVOURITE',
    value
  }
}
