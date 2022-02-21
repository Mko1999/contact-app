import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./ContactListItem.module.scss";
import { setCurrentContact } from "../../../store/actions";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const name =
    contact.firstName?.charAt(0).toUpperCase() ||
    contact.lastName?.charAt(0).toUpperCase();

  return (
    <div className={styles.contact_list_item}>
      <Link to={`/contact/${contact.id}`}>
        <div className={styles.contact_list_item__photo}>
          {contact.uploadedPhoto ? (
            <img
              alt="img"
              className={styles.contact_list_item__img}
              src={contact.uploadedPhoto}
              draggable="false"
            />
          ) : (
            <p>{name}</p>
          )}
        </div>

        <div
          role="button"
          onClick={() => dispatch(setCurrentContact(contact.id))}
          className={styles.contact_list_item__contact}
        >
          {contact?.firstName} {contact?.lastName}
        </div>
      </Link>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
};

ContactListItem.defaultProps = {
  contact: {},
};

export default ContactListItem;
