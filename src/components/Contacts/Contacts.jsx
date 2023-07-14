import React from 'react';
import './contacts.css';

const Contacts = props => {
  const { contacts, removeContact } = props;

  return (
    <ul className="contacts">
      {contacts.map(contact => (
        <React.Fragment key={contact.id}>
          <li className="contactsList">
            {contact.name}: {contact.number}{' '}
            <button className="delete" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Contacts;
