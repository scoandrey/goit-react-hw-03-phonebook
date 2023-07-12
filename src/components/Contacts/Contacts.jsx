import React, { Component } from 'react';
import './contacts.css'

class Contacts extends Component {
  render() {
    const { contacts, removeContact } = this.props;

    return (
      <ul className="contacts">
        {contacts.map(contact => (
          <React.Fragment key={contact.id}>
            <li className="contactsList">{contact.name}</li>
            <button onClick={() => removeContact(contact)}>Delete</button>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}

export default Contacts;
