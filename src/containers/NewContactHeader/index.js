import React, { useEffect, useState } from "react";
import styles from "./newcontactheader.module.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../store/contacts/actions";
import { contactSelector } from "../../store/contacts/selectors";
const NewContactHeader = ({ fields }) => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contactList = useSelector(contactSelector);

  useEffect(() => {
    setDisabled(!fields.firstName && !fields.lastName);
  }, [fields.company, fields.firstName, fields.lastName, disabled]);

  const sortContacts = contactList.sort((a, b) => a.id - b.id);

  const handleDoneClick = () => {
    dispatch(
      addContact({
        ...fields,
        id: sortContacts[sortContacts.length - 1].id + 1,
      })
    );
    navigate("/");
  };

  return (
    <div className={styles.newContactHeader}>
      <Link to="/">
        <Button
          value="Cancel"
          background="#fff"
          color="#007aff"
          className={styles.newContactHeader__cancel}
        />
      </Link>
      <h2 className={styles.newContactHeader__heading}>New Contact</h2>
      <Button
        value="Done"
        background="#fff"
        color={disabled ? "#8e8e93" : "#007aff"}
        disabled={disabled}
        className={styles.newContactHeader__done}
        onButtonClick={handleDoneClick}
      />
    </div>
  );
};

export default NewContactHeader;
