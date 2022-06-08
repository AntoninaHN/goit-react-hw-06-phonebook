

import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
function ContactList({ contacts, deleteContact }) {

  const elements = contacts.map((contact) => (
    <li key={contact.id} className={styles.list}>
      <span className={styles.span}>{contact.name}:{contact.number}</span>
     
      <button
        type="button"
        id={contact.id}
        onClick={() => deleteContact(contact.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  ))


    return (
      <div>
        <ul className={styles.list_ul}>
          {elements}
        </ul>
      </div>
    );
  }
  
export default ContactList;


ContactList.propTypes = {
  
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired
 
};
