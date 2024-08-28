import { createStore } from 'redux';
import placesReducer from './reducers';

const store = createStore(
  placesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
