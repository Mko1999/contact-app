import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { PlusCircleFill, XCircleFill } from "react-bootstrap-icons";

import styles from "./Form.module.scss";

import { InputField } from "../../../../components/shared";



const Form = ({ fields, setFields, openDeleteModal }) => {

  const inputArray = [{
    value: fields.firstName,
    type: "text",
    placeholder: "First Name" ,    
    onChange: (e) => changeHandler(e.target.value, "firstName")
  },
  {
    value: fields.lastName,
    type: "text",
    placeholder: "Last Name",
    onChange: (e) => changeHandler(e.target.value, "lastName")
  },
  {
    value: fields.company,
    type: "text",
    placeholder: "Company",
    onChange: (e) => changeHandler(e.target.value, "Company")
  },
]

  const phoneNumbers = fields.phoneNumbers
    ? fields.phoneNumbers.map((phoneNumber, index) => (
        <li key={index} className={styles.edit_profile_form__addPhone__list}>
          <InputField
            type="tel"
            value={phoneNumber || ""}
            placeholder="Phone Number"
            onChange={(e) =>
              changePhoneNumber(e.target.value, index, "phoneNumbers")
            }
          />
          <button onClick={() => removeData(index, "phoneNumbers")}>
            <XCircleFill size="20" fill="red" />
          </button>
        </li>
      ))
    : null;

  const emails = fields.emails
    ? fields.emails.map((email, index) => (
        <li key={index} className={styles.edit_profile_form__addPhone__list}>
          <InputField
            type="tel"
            value={email || ""}
            placeholder="Email"
            onChange={(e) => changePhoneNumber(e.target.value, index, "emails")}
          />
          <button onClick={() => removeData(index, "emails")}>
            <XCircleFill size="20" fill="red" />
          </button>
        </li>
      ))
    : null;

  const changeHandler = (text, name) => {
    setFields({ ...fields, [name]: text });
  };

  const [photo, setPhoto] = useState(null);

  const inputRef = useRef(null);

  const addPhoto = () => {
    inputRef.current.click();
  };

  const openModal = () => {
    setFields({ ...fields, phoneNumbers: [...fields.phoneNumbers, ""] });
  };

  const openMailModal = () => {
    setFields({ ...fields, emails: [...fields.emails, ""] });
  };

  const photoUpload = (event) => {
    const uploadedPhoto = URL.createObjectURL(event.target.files[0]);
    setPhoto(uploadedPhoto);
    changeHandler(uploadedPhoto, "uploadedPhoto");
  };

  const changePhoneNumber = (value, index, field) => {
    setFields({
      ...fields,
      [field]: fields[field].map((num, i) => {
        if (i !== index) return num;
        else return value;
      }),
    });
  };

  const removeData = (index, field) => {
    setFields({
      ...fields,
      [field]: fields[field].filter((num, i) => i !== index),
    });
  };

  return (
    <form
      autoComplete="off"
      className={styles.edit_profile_form}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.edit_profile_form__photo__section}>
        <div
          onClick={addPhoto}
          role="button"
          className={styles.edit_profile_form__photo__section__background}
        >
          {fields.uploadedPhoto ? (
            <img
              src={fields.uploadedPhoto}
              draggable="false"
              className={
                styles.edit_profile_form__photo__section__background__img
              }
              alt="avatar"
            />
          ) : (
            ""
          )}
        </div>
        <input
          ref={inputRef}
          onChange={photoUpload}
          type="file"
          className={styles.edit_profile_form__fileInput}
          accept="image/*,.pdf"
        />

        <div className={styles.edit_profile_form__photo__section__addPhoto}>
          <p role="button" onClick={addPhoto} className={styles.add_photo}>
            {fields.uploadedPhoto ? "Edit Photo" : "Add Photo"}
          </p>
        </div>
      </div>

      <ul className={styles.edit_profile_form__inputList}>
        {inputArray.map((input)=>(
          <li>
          <InputField
            value={input.value}
            placeholder= {input.placeholder}
            type= {input.type}
            onChange={input.onChange}
          />
        </li>
        ))}
        
        
      </ul>

      <div className={styles.edit_profile_form__addPhone}>
        {phoneNumbers}
        <div role="button" onClick={openModal}>
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Phone Number</p>
        </div>
      </div>

      <div className={styles.edit_profile_form__addEmail}>
        {emails}
        <div onClick={openMailModal} role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Email</p>
        </div>
      </div>

      <div className={styles.edit_profile_form__deleteContact}>
        <button onClick={openDeleteModal}>Delete Contact</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.any,
  setFields: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
};

export default Form;
