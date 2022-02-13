import React from "react";
import styles from "./contactpageheader.module.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../store/contacts/actions";
import { currentContactSelector } from "../../store/contacts/selectors";

const ContactPageHeader = () => {
  const dispatch = useDispatch();

  const contact = useSelector(currentContactSelector);


  const editProfile = () => {
    // dispatch(editContact());
  };

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
        <Link to={`/contact/${contact.id}/edit`}>
          <Button value="Edit" color="#007aff" onButtonClick={editProfile} />
        </Link>
      </div>
    </div>
  );
};

export default ContactPageHeader;
