import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Header.module.scss";
import { Button } from "../../../../components/shared";

import { isEmail, isPhone } from "../../../../utils/validator";
import { addContact } from "../../../../store/actions";
import { contactSelector } from "../../../../store/selectors";
const Header = ({ fields }) => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contactList = useSelector(contactSelector);

  useEffect(() => {
    setDisabled(!fields.firstName && !fields.lastName);
  }, [fields.company, fields.firstName, fields.lastName, disabled]);

  const sortContacts = contactList.sort((a, b) => a.id - b.id);

  const handleDoneClick = () => {
    if (fields.emails !== null && !isEmail(fields.emails)) {
      alert("Write valid email");
      return;
    }

    if (fields.phoneNumbers !== null && !isPhone(fields.phoneNumbers)) {
      alert("Write valid number");
      return;
    }

    dispatch(
      addContact({
        ...fields,
        id: sortContacts[sortContacts.length - 1].id + 1,
      })
    );
    navigate("/");
  };

  return (
    <div className={styles.new_contact_header}>
      <Link to="/">
        <Button
          value="Cancel"
          background="#fff"
          color="#007aff"
          className={styles.new_contact_header__cancel}
        />
      </Link>
      <h2 className={styles.new_contact_header__heading}>New Contact</h2>
      <Button
        value="Done"
        background="#fff"
        color={disabled ? "#8e8e93" : "#007aff"}
        disabled={disabled}
        className={styles.new_contact_header__done}
        onButtonClick={handleDoneClick}
      />
    </div>
  );
};

export default Header;
