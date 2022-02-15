import React, { useEffect } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.scss";
import { editContact } from "../../store/contacts/actions";
import {
  contactSelector,
  currentContactSelector,
} from "../../store/contacts/selectors";
import { setCurrentContact } from "../../store/contacts/actions";
import { useParams } from "react-router-dom";

const EditContactHeader = ({ fields }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector(contactSelector);
  const currentContact = useSelector(currentContactSelector);
  console.log(currentContact);

  const { id } = useParams();

  useEffect(() => {
    dispatch(setCurrentContact(+id));
  }, [id, dispatch]);

  const handleDoneClick = () => {
    dispatch(editContact(currentContact.id, fields));
    navigate(-1);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.editProfileHeader}>
      <Button
        onButtonClick={goBack}
        value="Cancel"
        background="#fff"
        color="#007aff"
        className={styles.editProfileHeader__cancel}
      />

      <Button
        value="Done"
        background="#fff"
        color="#007aff"
        className={styles.newContactHeader__done}
        onButtonClick={handleDoneClick}
      />
    </div>
  );
};

export default EditContactHeader;
