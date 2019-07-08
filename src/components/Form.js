import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter letter to guess" />
        <button type="submit">Guess</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submitted');
  };
}

export default Form;
