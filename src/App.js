import React from "react";
import { nanoid } from "nanoid";
import propTypes from "prop-types";

import styles from "./App.module.css";

export default class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  inputChange = (event) => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  formReset = () => {
    this.setState({ name: "", number: "" });
  };

  formSubmit = (event) => {
    const { name, number } = this.state;

    event.preventDefault();

    this.addContact(name, number);
    this.formReset();
  };

  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  }

  render() {
    const { contacts, name, number, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <div className={styles.section}>
          <h1 className={styles.mainTitle}>PHONEBOOK</h1>

          <form onSubmit={this.formSubmit}>
            <h3 className={styles.formTitle}>Enter name:</h3>
            <input
              className={styles.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.inputChange}
            />
            <h3 className={styles.formTitle}>Enter number:</h3>
            <input
              className={styles.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.inputChange}
            />
            <button type="submit" className={styles.submitButton}>
              Add contact
            </button>
          </form>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Contacts:</h2>
          <label>
            <h3 className={styles.formTitle}>Find contacts by name:</h3>
            <input
              className={styles.filter}
              type="text"
              value={filter}
              onChange={this.handleFilter}
            ></input>
          </label>
          <ul className={styles.contacts}>
            {filteredContacts.map((contact) => (
              <li key={contact.id}>
                <h4>
                  {contact.name}:{" "}
                  <span className={styles.tel}>{contact.number}</span>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
