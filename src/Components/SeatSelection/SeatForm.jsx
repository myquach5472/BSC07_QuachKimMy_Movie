import React, { Component } from 'react';

export default class SeatForm extends Component {
  state = {
    values: {
      user: '',
      ticket: '',
    },
    errors: {
      userError: '',
      ticketError: '',
    },
  };

  getValueInput = (event) => {
    const { value, id } = event.target;
    const newValue = { ...this.state.values };
    newValue[id] = value;
    const newError = { ...this.state.errors };

    if (id === 'ticket') {
      if (value === '' || Number(value) <= 0 || Number(value) >= 121) {
        newError[id] = 'Please enter a valid number between 1 and 120';
      } else {
        newError[id] = '';
      }
    } else if (newValue[id] === '') {
      newError[id] = `${id} This input is mandatory`;
    } else {
      newError[id] = '';
    }

    this.setState({
      values: newValue,
      errors: newError,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { user, ticket } = this.state.values;
    this.props.onFormSubmit(user, ticket);
  };

  render() {
    const { userError, ticketError } = this.state.errors;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='input-group has-validation mt-4 ps-4 pe-4 container'>
          {/* Name input */}
          <span className='input-group-text'>Name</span>
          <div className='form-floating'>
            <input
              onChange={this.getValueInput}
              type='text'
              className='form-control'
              id='user'
              placeholder='Name'
              required
            />
            <label htmlFor='user'>Name</label>
          </div>
          {/* Error text for Name */}
          {userError && <div className='invalid-feedback'>{userError}</div>}
          {/* Number of tickets input */}
          <span className='input-group-text ms-1'>Number of Tickets</span>
          <div className='form-floating'>
            <input
              type='number'
              onChange={this.getValueInput}
              className='form-control'
              id='ticket'
              placeholder='Number of Tickets'
              min='1'
              max='120'
              required
            />
            <label htmlFor='ticket'>How many would you like to purchase?</label>
          </div>
          {/* Error text for #tickets */}
          {ticketError && <div className='invalid-feedback'>{ticketError}</div>}
        </div>
        {/* Button */}
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button className='btn btn-secondary mt-4 mb-4' type='submit'>
            Start Selection
          </button>
        </div>
      </form>
    );
  }
}
