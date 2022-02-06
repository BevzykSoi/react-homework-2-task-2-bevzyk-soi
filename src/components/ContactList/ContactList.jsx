import propTypes from "prop-types";

import styles from "./ContactList.module.css";

const ContactList = ({filteredContacts, deleteContact}) => {
    return (
      <ul className={styles.contacts}>
        {filteredContacts.map((contact) => (
          <li className={styles.contact} key={contact.id}>
            <h4>
              {contact.name}:{" "}
              <span className={styles.tel}>{contact.number}</span>
            </h4>
            <button className={styles.contactButton} type="button" onClick={() => {
              deleteContact(contact.id);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    );
}

ContactList.defaultProps = {
    filteredContacts: [],
}

ContactList.propTypes = {
    filteredContacts: propTypes.array
}

export default ContactList;