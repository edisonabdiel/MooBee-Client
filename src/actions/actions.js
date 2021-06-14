// ACTIONS TYPES:
export const SET_MOVIES = 'SET_MOVIES';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = "UPDATE_USER";
export const SET_FAVOURITE = 'SET_FAVOURITE';
export const UPDATE_FAVOURITE = 'UPDATE_FAVOURITE';

// ACTIONS:
export function setMovies(value) {
  console.log('SET_MOVIES action triggered');
  return { type: SET_MOVIES, value };
}

export function setUser(value) {
  console.log('SET_USER action triggered');
  return { type: SET_USER, value };
}

export function updateUser(value) {
  console.log('UPDATE_USER action triggered');
  return { type: UPDATE_USER, value };
}
