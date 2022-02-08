import React from "react";
import styles from "./newcontact.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { NewContactHeader, Navbar, Form } from "..";
const NewContact = () => {
  return (
    <div className={styles.newContact}>
      <div className={styles.newContact__container}>
        <img alt="iphone" src={blueiphone} className={styles.newContact__pic} />
        <div className={styles.newContact__heading}>
          <Navbar />
          <NewContactHeader />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default NewContact;
