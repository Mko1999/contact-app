import React, { useState, useEffect } from "react";
import styles from "./editprofile.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { EditProfileHeader, EditProfileForm } from "../../containers";
import { Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentContact } from "../../store/contacts/actions";
import { currentContactSelector } from "../../store/contacts/selectors";
import { DeleteConfirm } from "../../containers";

const EditProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const openDeleteModal = () => {
    setShowModal(true);
    console.log(showModal);
    console.log("button clicked");
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
    <div
      role="button"
      // onClick={() => setShowModal(false)}
      className={styles.editProfile}
    >
      <div className={styles.editProfile__container}>
        <img
          alt="iphone"
          src={blueiphone}
          className={styles.editProfile__pic}
        />
        <DeleteConfirm showModal={showModal} setShowModal={setShowModal} />
        <div className={styles.editProfile__heading}>
          <Navbar />
          <EditProfileHeader fields={fields} />
          <EditProfileForm
            openDeleteModal={openDeleteModal}
            fields={fields}
            setFields={setFields}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
