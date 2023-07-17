import React, { Component } from 'react';

export default class ConfirmDisplay extends Component {
  render() {
    const { name, ticket, selectedSeats } = this.props;

    return (
      <div className='container'>
        <div className='mt-4 mb-4 shadow rounded p-3 bg-opacity-10 bg-secondary'>
          <h4 className='text-light text-center fw-bold'>
            Hello <span className='text-warning'>{name}</span>,
          </h4>
          <p className='text-light text-center fw-bold'>
            Thank you for booking <span className='text-warning'>{ticket}</span> with us.
          </p>
          <p>Enjoy your movie on:</p>
          {selectedSeats.length > 0 ? (
            <ul>
              {selectedSeats.map((seat, index) => (
                <li className='list-group-item' key={index}>
                  <h4 className='text-warning'>{seat}</h4>
                </li>
              ))}
            </ul>
          ) : (
            <p>No seats selected</p>
          )}
        </div>
      </div>
    );
  }
}
