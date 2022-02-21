import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListGroup.module.scss";
import ContactListItem from "../ContactListItem";

const ContactListGroup = ({ groupedContacts, groupKey }) => {
  const contactGroup = groupedContacts.map((contact, id) => (
    <ContactListItem key={id} contact={contact} />
  ));

  return (
    <div className={styles.contact_List_Group}>
      <div className={styles.contact_List_Group__firstChar}>
        <p>{groupKey}</p>
      </div>
      <div>{contactGroup}</div>
    </div>
  );
};

ContactListGroup.propTypes = {
  groupedContacts: PropTypes.array,
  groupKey: PropTypes.string,
};

ContactListGroup.defaultProps = {
  groupedContacts: [],
  groupKey: "",
};

export default ContactListGroup;
