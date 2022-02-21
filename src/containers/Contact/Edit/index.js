import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Edit.module.scss";

import { Navbar } from "../../../components/views";
import Header from "./Header";
import Form from "./Form";

import { Modal } from "../../../components/views";

import blueiphone from "../../../assets/blueiphone.png";
import { setCurrentContact } from "../../../store/actions";
import { currentContactSelector } from "../../../store/selectors";

const Edit = () => {
  const [showModal, setShowModal] = useState(false);

  const openDeleteModal = () => {
    setShowModal(true);
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setCurrentContact(+id));
  }, [id, dispatch]);

  const contact = useSelector(currentContactSelector);
  const [fields, setFields] = useState(contact);

  return (
    <div className={styles.edit_profile}>
      <div className={styles.edit_profile__container}>
        <img
          alt="iphone"
          src={blueiphone}
          className={styles.edit_profile__pic}
        />
        <Modal
          title="Are you sure you want to delete contact"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className={styles.edit_profile__heading}>
          <Navbar />
          <Header fields={fields} />
          <Form
            openDeleteModal={openDeleteModal}
            fields={fields}
            setFields={setFields}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
