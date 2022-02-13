import React, { useState } from "react";
import styles from "./newcontact.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { NewContactHeader, Navbar, NewContactForm } from "..";
import { useSelector } from "react-redux";
import { contactSelector } from "../../store/contacts/selectors";
const NewContact = () => {
  const contacts = useSelector(contactSelector);

  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phoneNumbers: [],
    emails: [],
    uploadedPhoto: null
  });

  return (
    <div className={styles.newContact}>
      <div className={styles.newContact__container}>
        <img alt="iphone" src={blueiphone} className={styles.newContact__pic} />
        <div className={styles.newContact__heading}>
          <Navbar />
          <NewContactHeader fields={fields} />
          <NewContactForm fields={fields} setFields={setFields} />
        </div>
      </div>
    </div>
  );
};

export default NewContact;
