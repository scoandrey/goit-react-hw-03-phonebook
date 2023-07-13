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
    filter: '',
  };

  removeContact = contact => {
    let contacts = this.state.contacts;
    contacts = contacts.filter(c => c.id !== contact.id);
    this.setState({ contacts });
  };

  addContact = contact => {
    if (
      !this.state.contacts.filter(
        c => c.name.toLowerCase() === contact.name.toLowerCase()
      ).length
    ) {
      const contacts = this.state.contacts;
      contacts.push({ ...contact, id: nanoid() });
      this.setState({ contacts });
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  setFilter = name => {
    this.setState({ filter: name });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <span>Find contacts by name</span>
        <Filter onChange={this.setFilter} />
        <Contacts
          contacts={this.state.contacts.filter(c =>
            c.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}
export default Main;
