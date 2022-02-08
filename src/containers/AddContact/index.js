import React from "react";
import styles from "./addcontact.module.scss";
import { Link } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";

const AddContact = () => {
  return (
    <div className={styles.addContact}>
      <h2 className={styles.addContact__title}>Contacts</h2>
      <Link to="/add">
        <button className={styles.addContact__btn}>
          <Plus fill="#007aff" size="24" />
        </button>
      </Link>
    </div>
  );
};

export default AddContact;
