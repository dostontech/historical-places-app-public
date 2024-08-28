import { TOGGLE_VISITED, SET_PLACES } from './actionTypes';

export const toggleVisited = (id) => ({
  type: TOGGLE_VISITED,
  payload: id,
});

export const setPlaces = (places) => ({
  type: SET_PLACES,
  payload: places,
});
