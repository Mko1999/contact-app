import React, { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { InputField } from "../../components";
import styles from "./EditProfileForm.module.scss";
import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

const EditContactForm = ({ fields, setFields }) => {
  const changeHandler = (text, name) => {
    setFields({ ...fields, [name]: text });
  };

  const [photo, setPhoto] = useState(null);

  const inputRef = useRef(null);

  const addPhoto = () => {
    inputRef.current.click();

    console.log("barev");
  };

  const photoUpload = (event) => {
    const uploadedPhoto = URL.createObjectURL(event.target.files[0]);
    setPhoto(uploadedPhoto);
    changeHandler(uploadedPhoto, "uploadedPhoto");

  };

  return (
    <form
      autoComplete="off"
      className={styles.editProfileForm}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.editProfileForm__photo__section}>
        <div
          onClick={addPhoto}
          role="button"
          className={styles.editProfileForm__photo__section__background}
        >
          {photo !== null && <img className ={styles.editProfileForm__img} alt="uploadedPhoto" src={photo} />}
        </div>
        <input
          ref={inputRef}
          onChange={photoUpload}
          type="file"
          className={styles.editProfileForm__fileInput}
          accept="image/*,.pdf"
        />

        <div className={styles.editProfileForm__photo__section__addPhoto}>
          <p role="button" onClick={addPhoto} className={styles.add_photo}>
            {photo !== null ? "Edit Photo" : "Add Photo"}
          </p>
        </div>
      </div>

      <ul className={styles.editProfileForm__inputList}>
        <li>
          <InputField
            value={fields.firstName}
            placeholder="First Name"
            type="text"
            onChange={(e) => changeHandler(e.target.value, "firstName")}
          />
        </li>
        <li>
          <InputField
            value={fields.lastName}
            placeholder="Last Name"
            type="text"
            onChange={(e) => changeHandler(e.target.value, "lastName")}
          />
        </li>
        <li>
          <InputField
            value={fields.company}
            placeholder="Company"
            type="text"
            onChange={(e) => changeHandler(e.target.value, "company")}
          />
        </li>
      </ul>

      <div className={styles.editProfileForm__addPhone}>
        <div role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Phone Number</p>
        </div>
      </div>

      <div className={styles.editProfileForm__addEmail}>
        <div role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Email</p>
        </div>
      </div>

      <div className={styles.editProfileForm__deleteContact}>
        <p>Delete Contact</p>
      </div>
    </form>
  );
};

export default EditContactForm;
