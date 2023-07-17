import { createStore, combineReducers } from 'redux';
import SeatReducer from './SeatReducer';

const rootReducer = combineReducers({
  SeatReducer, 
});

const store = createStore(rootReducer);

export default store;
