import { seatArr } from "./DataSeat"; 

export const loadSeatData = () => {
  return {
    type: 'LOAD_SEAT_DATA',
    payload: seatArr, 
  };
};

export const selectSeat = (seatNumber) => {
  return {
    type: 'SELECT_SEAT',
    payload: seatNumber,
  };
};

