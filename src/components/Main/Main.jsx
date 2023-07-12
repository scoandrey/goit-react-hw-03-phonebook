import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';

class Main extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  removeContact = contact => {
    let contacts = this.state.contacts;
    contacts = contacts.filter(c => c.id !== contact.id);
    this.setState({ contacts });
  };

  addContact = contact => {
    const contacts = this.state.contacts;
    contacts.push({ ...contact, id: nanoid() });
    this.setState({ contacts });
    // if (this.state.name === this.name.value) {
    //   alert(`${contact}is already in contacts`);
    // }
  };

  setFilter = name => {
    let { contacts } = this.state;
    return contacts.filter(c => c.name.includes(name));
    
    // this.setState(state => ({ ...state, filter: name }));
    // console.log(this.state.filter);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter onChange={this.setFilter} />
        <Contacts
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}
export default Main;
