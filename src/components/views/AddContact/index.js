import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";
import styles from "./AddContact.module.scss";

const AddContact = () => {
  return (
    <div className={styles.add_contact}>
      <div className={styles.add_contact__container}>
        <h2 className={styles.add_contact__title}>Contacts</h2>
        <Link to="/add">
          <div className={styles.add_contact__btn}>
            <Plus fill="#007aff" size="40" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
