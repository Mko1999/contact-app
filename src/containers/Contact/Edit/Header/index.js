import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Header.module.scss";

import { Button } from "../../../../components/shared";
import { editContact, setCurrentContact } from "../../../../store/actions";
import { currentContactSelector } from "../../../../store/selectors";

const Header = ({ fields }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentContact = useSelector(currentContactSelector);

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
    <div className={styles.edit_profile_header}>
      <Button
        onButtonClick={goBack}
        value="Cancel"
        background="#fff"
        color="#007aff"
        className={styles.edit_profile_header__cancel}
      />

      <Button
        value="Done"
        background="#fff"
        color="#007aff"
        className={styles.new_contact_header__done}
        onButtonClick={handleDoneClick}
      />
    </div>
  );
};

export default Header;
