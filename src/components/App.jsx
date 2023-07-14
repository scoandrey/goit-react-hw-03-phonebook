import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  removeContact = id => {
    const contacts = this.state.contacts.filter(cont => cont.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({ contacts });
    // Скижите пожалуйста какие могут быть 'наклaдки' если setState вызывается послединм?
  };

  addContact = contact => {
    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const contacts = this.state.contacts;
    contacts.push({ ...contact, id: nanoid() });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({ contacts });
  };

  setFilter = name => {
    this.setState({ filter: name });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');

    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  render() {
    const filterContacts = () =>
      this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <span>Find contacts by name</span>

        <Filter onChange={this.setFilter} />

        <Contacts
          contacts={filterContacts()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
export default App;