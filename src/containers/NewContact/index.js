import React, { useState } from "react";
import styles from "./newcontact.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { NewContactHeader, Navbar, Form } from "..";

const NewContact = () => {
  const [submit,setSubmit] = useState(false);


    const addContact =()=>{
      setSubmit(true)
    }
  return (
    <div className={styles.newContact}>
      <div className={styles.newContact__container}>
        <img alt="iphone" src={blueiphone} className={styles.newContact__pic} />
        <div className={styles.newContact__heading}>
          <Navbar />
          <NewContactHeader addContact={addContact} />
          <Form submit={submit} setSubmit = {setSubmit} />
        </div>
      </div>
    </div>
  );
};

export default NewContact;
