import React from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const [state, setState] = useState({ name: "", number: "" });

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
  };
  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label className={styles.label}>
          <span className={styles.span}>Name</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.span}>Number</span>
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button type="submit" className={styles.btn}>
        Add
      </button>
    </form>
  );
}
