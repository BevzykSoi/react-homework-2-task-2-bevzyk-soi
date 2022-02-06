import React from "react";
import propTypes from "prop-types";

import styles from "./ContactForm.module.css";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  inputChange = (event) => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = (event) => {
    const { name, number } = this.state;

    event.preventDefault();

    this.props.addContact(name, number);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
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
    );
  }
}

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};
