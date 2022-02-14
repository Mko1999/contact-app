import React from "react";
import styles from "./contactlistitem.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentContact } from "../../store/contacts/actions";
const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contactListItem}>
      <div className={styles.contactListItem__photo}>
        {
          contact.uploadedPhoto? 
          <img alt="img" className={styles.contactListItem__img} src= {contact.uploadedPhoto}/>:
          <p> {contact.firstName.charAt(0).toUpperCase()}</p>
        }
      </div>

      <div
        role="button"
        onClick={() => dispatch(setCurrentContact(contact.id))}
        className={styles.contactListItem__contact}
      >
        <Link to={`/contact/${contact.id}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </div>
    </div>
  );
};

export default ContactListItem;
