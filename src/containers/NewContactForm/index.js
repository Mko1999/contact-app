import React, { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { InputField } from "../../components";
import styles from "./form.module.scss";
import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

const NewContactForm = ({ fields, setFields }) => {
  const changeHandler = (text, name) => {
    setFields({ ...fields, [name]: text });
  };

  const [photo, setPhoto] = useState(null);

  const inputRef = useRef(null);

  const addPhoto = () => {
    inputRef.current.click();

    console.log("barev");
  };

  const openModal = () =>{
    setFields({...fields, phoneNumbers: [...fields.phoneNumbers,'']})
  }

  const photoUpload = (event) => {
    console.log(event.target.files[0])
    const uploadedPhoto = URL.createObjectURL(event.target.files[0]);
    setPhoto(uploadedPhoto);
    changeHandler(uploadedPhoto, "uploadedPhoto");
  };

  const changePhoneNumber =(value,index, field) =>{
    setFields({
      ...fields,
      [field]: fields[field].map((num, i) => {
        if (i !== index) return num
        else return value
      })
    })
  }

  const removeData =(index, field) =>{
     setFields({
      ...fields,
      [field]: fields[field].filter((num, i) => i !== index)
    })
  }

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
          {photo !== null && <img className= {styles.form__photo__section__img} alt="uploadedPhoto" src={photo} />}
        </div>
        <input
          ref={inputRef}
          onChange={photoUpload}
          type="file"
          className={styles.form__fileInput}
          accept="image/*,.pdf"
        />

        <div className={styles.form__photo__section__addPhoto}>
          <p role="button" onClick={addPhoto} className={styles.add_photo}>
            {photo !== null ? "Edit Photo" : "Add Photo"}
          </p>
        </div>
      </div>

      <ul className={styles.form__inputList}>
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

     

      <div className={styles.form__addPhone}>
       {
        fields.phoneNumbers.map((phoneNumber,index)=>
          
           (<div>
           
          <InputField
            type="tel"
            value={phoneNumber || ''}
            placeholder="Phone Number"
            onChange={(e) =>
              changePhoneNumber( e.target.value,index, "phoneNumbers")
            }
          />
          <button onClick ={()=>removeData(index, "phoneNumbers")}      >
           Remove data
          </button>
        </div>)
        )
      }
        <div onClick ={openModal} role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Phone Number</p>
        </div>
      </div>

      <div className={styles.form__addEmail}>
        <div role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Email</p>
        </div>
      </div>
    </form>
  );
};

export default NewContactForm;