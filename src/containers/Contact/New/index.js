import React, { useState } from "react";
import styles from "./New.module.scss";
import blueiphone from "../../../assets/blueiphone.png";
import Form from "./Form";
import Header from "./Header";
import { Navbar } from "../../../components/views";
const New = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phoneNumbers: [],
    emails: [],
    uploadedPhoto: null,
  });

  return (
    <div className={styles.new_contact}>
      <div className={styles.new_contact__container}>
        <img
          alt="iphone"
          src={blueiphone}
          className={styles.new_contact__pic}
        />
        <div className={styles.new_contact__absolute}>
          <div className={styles.new_contact__heading}>
            <Navbar />
            <Header fields={fields} />
            <Form fields={fields} setFields={setFields} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
