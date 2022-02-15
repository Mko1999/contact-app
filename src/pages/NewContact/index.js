import React, { useState } from "react";
import styles from "./newcontact.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { NewContactForm, NewContactHeader } from "../../containers";
import { Navbar } from "../../components";
const NewContact = ({mode}) => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phoneNumbers: [],
    emails: [],
    uploadedPhoto: null,
  });

  return (
    <div className={styles.newContact}>
      <div className={styles.newContact__container}>
        <img alt="iphone" src={blueiphone} className={styles.newContact__pic} />
        <div className={styles.newContact__absolute}>
          <div className={styles.newContact__heading}>
            <Navbar />
            <NewContactHeader fields={fields} />
            <NewContactForm fields={fields} setFields={setFields} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
