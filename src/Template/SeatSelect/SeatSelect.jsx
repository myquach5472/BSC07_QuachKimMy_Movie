import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SeatForm from '../../Components/SeatSelection/SeatForm';
import SeatMap from '../../Components/SeatSelection/SeatMap';
import ConfirmDisplay from '../../Components/SeatSelection/ConfirmDisplay';

export default class SeatSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      ticket: '',
      selectedSeats: [],
      showConfirm: false,
    };
  }

  handleFormSubmit = (name, ticket) => {
    this.setState({
      name,
      ticket,
      step: 2,
    });
  };

  handleSeatSelectionChange = (selectedSeats) => {
    this.setState({ selectedSeats });
  };

  handleSeatSelectionSubmit = () => {
    const { selectedSeats } = this.state;
    if (selectedSeats.length === parseInt(this.state.ticket)) {
      this.setState({ showConfirm: true, step: 3 });
    } else {
      alert('Please select the exact number of seats as the number of tickets');
    }
  };


  
  // render here 
  render() {
    const { step, name, ticket, selectedSeats, showConfirm } = this.state;

    return (
      <div className='bg-dark h-100'>
        <h1 className='text-center text-light pt-5'>MOVIE SEAT SELECTION</h1>
        <div className='container text-center bg-opacity-10 bg-danger text-light mt-4 pt-2 pb-2 rounded'>
          {step === 1 && <SeatForm onFormSubmit={this.handleFormSubmit} />}
          {step === 2 && (
            <SeatMap
              name={name}
              ticket={ticket}
              selectedSeats={selectedSeats}
              onSeatSelectionChange={this.handleSeatSelectionChange}
              onSeatSelectionSubmit={this.handleSeatSelectionSubmit}
            />
          )}
          {step === 3 && showConfirm && <ConfirmDisplay name={name} ticket={ticket} selectedSeats={selectedSeats} />}
        </div>
        <p className='text-center text-light pt-4 pb-5'>© BCS07 Movie Seat Selection. My Quach | 2023</p>
      </div>
    );
  }
}
