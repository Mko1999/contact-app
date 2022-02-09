import React from "react";
import styles from "./newcontactheader.module.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const NewContactHeader = ({addContact}) => {
  return (
    <div className={styles.newContactHeader}>
      <Link to="/">
        <Button
          value="Cancel"
          background="#fff"
          color="#007aff"
          className={styles.newContactHeader__cancel}
        ></Button>
      </Link>
      <h2 className={styles.newContactHeader__heading}>New Contact</h2>
      <Button
        value="Done"
        background="#fff"
        color="#8e8e93"
        className={styles.newContactHeader__done}
        onButtonClick ={addContact}
      ></Button>
    </div>
  );
};

export default NewContactHeader;
