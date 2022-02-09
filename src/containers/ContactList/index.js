import React from "react";
import styles from "./contactlist.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { contactSelector } from "../../store/contacts/selectors";
import { ContactListGroup } from "../../components";
import { contactGroup, contactSort } from "../../utils/contactHelper";

const ContactList = () => {
  const contacts = useSelector(contactSelector);
  const groupedContacts = contacts.sort(contactSort).reduce(contactGroup, {})
  const dispatch = useDispatch();

  return (
    <div className={styles.contactList}>
      {Object.keys(groupedContacts).map(key => <ContactListGroup groupedContacts={groupedContacts[key]} groupKey={key} />)
      
      }
      <div className={styles.contactList__count}>
        <p>{(contacts.length === 0 ? "No" : contacts.length) + " Contacts"}</p>
      </div>
    </div>
  );
};

export default ContactList;
