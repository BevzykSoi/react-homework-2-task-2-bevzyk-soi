import React from "react";
import { nanoid } from "nanoid";

import styles from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const foundContact = this.state.contacts.find(
      (cont) => cont.name === contact.name
    );

    if (foundContact) {
      alert(`${foundContact.name} is already in contacts!`);
      return;
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <div className={styles.section}>
          <h1 className={styles.mainTitle}>PHONEBOOK</h1>
          <ContactForm
            addContact={this.addContact}
            formReset={this.formReset}
          />
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Contacts:</h2>
          <Filter filter={filter} handleFilter={this.handleFilter} />
          <ContactList
            filteredContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
