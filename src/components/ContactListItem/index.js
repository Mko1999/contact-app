import React from 'react';
import styles from "./contactlistitem.module.scss"

const ContactListItem = ({contact}) => {
  return <div className= {styles.contactListItem}>
      <div></div>
      <p>{contact.name}</p>
  </div>;
};

export default ContactListItem;
