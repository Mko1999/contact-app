import React from "react";
import styles from "./contactlistitem.module.scss";
import { Link,  } from "react-router-dom";

const ContactListItem = ({ contact }) => {

  return (
    <div className={styles.contactListItem}>
      <div className={styles.contactListItem__photo}>
        <p> {contact.firstName.charAt(0)}</p>
      </div>

      <p className={styles.contactListItem__contact}>
        <Link to={"/contact/" + contact.id}>
          {contact.firstName} {contact.lastName}
        </Link>
      </p>
    </div>
  );
};

export default ContactListItem;
