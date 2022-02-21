import React from "react";
import PropTypes from "prop-types";

import styles from "./List.module.scss";
import { ContactListGroup } from "../../../components/views";
import { sortContacts, groupContacts } from "../../../utils/contactHelper";

const List = ({ contacts }) => {
  const groupedContacts = contacts.sort(sortContacts).reduce(groupContacts, {});
  const mapedGroupedContacts = Object.keys(groupedContacts).map((key) => (
    <ContactListGroup
      key={key}
      groupedContacts={groupedContacts[key]}
      groupKey={key}
    />
  ));

  return (
    <div className={styles.contact_list}>
      {mapedGroupedContacts}
      <div className={styles.contact_list__count}>
        <p>{(contacts.length ? contacts.length : "No") + " Contacts"}</p>
      </div>
    </div>
  );
};

List.propTypes = {
  contacts: PropTypes.array,
};

List.defaultProps = {
  contacts: [],
};

export default List;
