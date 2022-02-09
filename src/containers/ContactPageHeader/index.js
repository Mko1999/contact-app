import React from "react";
import styles from "./contactpageheader.module.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const ContactPageHeader = () => {
  return (
    <div className={styles.contactPageHeader}>
      <div className={styles.contactPageHeader__goBackButton}>
        <ArrowLeft
          size="24"
          color="#007aff"
          className={styles.contactPageHeader__leftArrow}
        />
        <Link to="/">
          <Button value="Contacts" color="#007aff" />
        </Link>
      </div>
      <div className={styles.contactPageHeader__editPage}>
        <Link to="/edit">
          <Button value="Edit" color="#007aff" />
        </Link>
      </div>
    </div>
  );
};

export default ContactPageHeader;
