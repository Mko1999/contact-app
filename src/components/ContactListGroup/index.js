import React from "react";
import styles from "./contactlistgroup.module.scss";
import { ContactListItem } from "..";

const ContactListGroup = ({ groupedContacts, groupKey }) => {
  return (
    <div className={styles.contactListGroup}>
      <div className={styles.contactListGroup__firstChar}>
        <p>{groupKey}</p>
        {<p></p>}
      </div>
      <div>
        {groupedContacts.map((contact, id) => (
          <ContactListItem key={id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactListGroup;
