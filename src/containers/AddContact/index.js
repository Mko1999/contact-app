import React from "react";
import styles from "./addcontact.module.scss";
import { Link } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";

const AddContact = () => {
  return (
    <div className={styles.addContact}>
      <div className={styles.addContact__container}>
        <h2 className={styles.addContact__title}>Contacts</h2>
        <Link to="/add">
          <button className={styles.addContact__btn}>
            <Plus fill="#007aff" size="40" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
