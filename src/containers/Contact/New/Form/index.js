import React, { useState, useRef } from "react";
import { PlusCircleFill, XCircleFill } from "react-bootstrap-icons";
import { InputField } from "../../../../components/shared";
import styles from "./Form.module.scss";

const Form = ({ fields, setFields }) => {
  const changeHandler = (text, name) => {
    setFields({ ...fields, [name]: text });
  };

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

  const [photo, setPhoto] = useState(null);

  const inputRef = useRef(null);

  const phoneNumbers = fields.phoneNumbers.map((phoneNumber, index) => (
    <li key={index} className={styles.form__addPhone__list}>
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
  ));

  const emails = fields.emails.map((email, index) => (
    <li key={index} className={styles.form__addEmail__list}>
      <InputField
        type="email"
        value={email || ""}
        placeholder="Email"
        onChange={(e) => changePhoneNumber(e.target.value, index, "emails")}
      />
      <button onClick={() => removeData(index, "emails")}>
        <XCircleFill size="20" fill="red" />
      </button>
    </li>
  ));

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
       return i === index ? value : num
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
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.form__photo__section}>
        <div
          onClick={addPhoto}
          role="button"
          className={styles.form__photo__section__background}
        >
          {photo !== null && (
            <img
              draggable="false"
              className={styles.form__photo__section__img}
              alt="uploadedPhoto"
              src={photo}
            />
          )}
        </div>
        <input
          ref={inputRef}
          onChange={photoUpload}
          type="file"
          className={styles.form__fileInput}
          accept="image/*,"
        />

        <div className={styles.form__photo__section__addPhoto}>
          <p role="button" onClick={addPhoto} className={styles.add_photo}>
            {photo ? "Edit Photo" : "Add Photo"}
          </p>
        </div>
      </div>

      <ul className={styles.form__inputList}>
        {inputArray.map((input) => 
           <li>
           <InputField
             value={input.value}
             placeholder= {input.placeholder}
             type={input.type}
             onChange={input.onChange}
           />
         </li>
        )}
       
       
      </ul>

      <div className={styles.form__addPhone}>
        {phoneNumbers}
        <div onClick={openModal} role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Phone Number</p>
        </div>
      </div>

      <div className={styles.form__addEmail}>
        {emails}

        <div onClick={openMailModal} role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Email</p>
        </div>
      </div>
    </form>
  );
};

export default Form;
