import React from "react";
import propTypes from "prop-types";

import styles from "./Phonebook.module.css";

export default class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className={styles.section}>
        <h2 className={styles.title}>PHONEBOOK</h2>

        <form>
          <h3 className={styles.formTitle}>Enter name:</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
          <button type="submit" className={styles.submitButton}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
