import { TOGGLE_VISITED, SET_PLACES } from './actionTypes';

const initialState = {
  places: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISITED:
      return {
        ...state,
        places: state.places.map(place =>
          place.id === action.payload
            ? { ...place, visited: !place.visited }
            : place
        ),
      };
    case SET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
