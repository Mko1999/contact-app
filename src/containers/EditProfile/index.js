import React, { useState } from "react";
import styles from "./editprofile.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { Navbar, EditProfileHeader, EditProfileForm } from "..";
import {useDispatch,useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {setCurrentContact} from "../../store/contacts/actions"
import { currentContactSelector } from "../../store/contacts/selectors";

const EditProfile = () => {
  const dispatch = useDispatch()
  const {id} = useParams();
  dispatch(setCurrentContact(+id))
  const contact = useSelector(currentContactSelector);
  const [fields, setFields] = useState(contact);
  return (
    <div className={styles.editProfile}>
      <div className={styles.editProfile__container}>
        <img
          alt="iphone"
          src={blueiphone}
          className={styles.editProfile__pic}
        />
        <div className={styles.editProfile__heading}>
          <Navbar />
          <EditProfileHeader fields={fields} />
          <EditProfileForm fields={fields} setFields={setFields} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
