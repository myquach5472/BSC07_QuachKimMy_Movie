import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSeatData } from './SeatAction';
import '../../index.css'

class SeatMap extends Component {
  componentDidMount() {
    this.props.loadSeatData();
  }

  handleSeatChange = (event) => {
    const { checked, id } = event.target;
    const { selectedSeats, onSeatSelectionChange, ticket } = this.props;
  
    if (checked) {
      if (selectedSeats.length < parseInt(ticket)) {
        const newSelectedSeats = [...selectedSeats, id];
        onSeatSelectionChange(newSelectedSeats);
      } else {
        event.target.checked = false;
        alert('You have reached the maximum number of seats selected.');
      }
    } else {
      const newSelectedSeats = selectedSeats.filter((seat) => seat !== id);
      onSeatSelectionChange(newSelectedSeats);
    }
  };
  


  // render here 
  render() {
    const { seats } = this.props;

    const filteredSeats = seats.filter((row) => /^[A-Z]/.test(row.row));

    const seatCheckboxes = filteredSeats.map((row) => (
     
      <tr key={row.row}>
        <td>{row.row}</td>
        {row.seatList.map((seat) => (
          <td key={seat.seatNumber}>
            <input
  type='checkbox'
  className='btn-check'
  id={seat.seatNumber}
  autoComplete='off'
  onChange={this.handleSeatChange}
/>
<label
  className='btn border m-1'
  htmlFor={seat.seatNumber}
  // style={{ color: seat.reserved ? 'red' : 'inherit' }}
>
  {seat.seatNumber}
</label>

          </td>
        ))}
      </tr>
    ));



    // return here 
    return (
      <div className='container'>
        <div className='border border-secondary'>
          <span className='text-white me-3'>▧ Selected</span>
          <span className='text-danger me-3'>▧ Reserved</span>
          <span className='text-secondary me-3'>▧ Empty</span>
        </div>

        <div className='card text-white bg-opacity-10 bg-light mt-4 mb-4'>
          <div className='card-body'>
            <h4 className='card-title text-secondary'>Please Select your Seats NOW!</h4>
            <table style={{ tableLayout: 'fixed' }} className='w-100 mt-4 mb-4'>
              <thead>
                <tr>
                  <th></th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                </tr>
              </thead>
              <tbody>{seatCheckboxes}</tbody>
            </table>
            <div className='bg-light text-secondary fw-bold fs-2 mt-3 mb-4 rounded'>SCREEN</div>
          </div>
        </div>

        <div className='d-grid gap-2 col-6 mx-auto'>
          <button
            className='btn btn-success fw-bold mb-4'
            type='button'
            onClick={this.props.onSeatSelectionSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seats: state.SeatReducer.seats,
  };
};

const mapDispatchToProps = {
  loadSeatData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatMap);
