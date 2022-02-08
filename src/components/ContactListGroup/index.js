import React from 'react';
import { ContactListItem } from '..';
import styles from "./contactlistgroup.module.scss"
const ContactListGroup = ({groupedContacts}) => {
  return <div className = {styles.contactListGroup} >
      <div>
          {
              groupedContacts.key
          }
      </div>
      <div>
          {
              groupedContacts.contacts.map((contact)=>{
                  return <ContactListItem contact={contact}/>
              })
          }
      </div>
  </div>;
};

export default ContactListGroup;
