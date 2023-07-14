import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = this.initialState();

  nameChange = e => {
    this.setState({ name: e.target.value });
  };

  numberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState());
  };

  initialState() {
    return { name: '', number: '' };
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="formLabel">
          <span className="formName">Name</span>
          <input
            className="input"
            value={this.state.name}
            onChange={this.nameChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="formLabel">
          <span>Number</span>
          <input
            className="input"
            value={this.state.number}
            onChange={this.numberChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;
