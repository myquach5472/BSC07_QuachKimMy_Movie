import { createStore } from 'redux';
import { LOAD_SEAT_DATA, SELECT_SEAT } from './SeatAction';

const initialState = {
    seats: [], 
    selectedSeats: [], 
  };
  
  const seatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_SEAT_DATA':
        return {
          ...state,
          seats: action.payload,
        };
      case 'SELECT_SEAT':
        return {
          ...state,
          selectedSeats: [...state.selectedSeats, action.payload],
        };
    
      default:
        return state;
    }
  };
  
  export default seatReducer;
  