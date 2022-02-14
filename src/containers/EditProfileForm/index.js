import React, { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { InputField } from "../../components";
import styles from "./EditProfileForm.module.scss";
import { useRef } from "react";
import {FileMinusFill} from "react-bootstrap-icons";
import { contactReducer } from "../../store/contacts/reducers";
import {DeleteConfirm} from ".."
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

  const openModal = () =>{
    setFields({...fields, phoneNumbers: [...fields.phoneNumbers,'']})
    
  }

  const openDeleteModal = () =>{
    
  }

  const openMailModal = () =>{
    setFields({...fields,emails: [...fields.emails,'']})
  }

  const photoUpload = (event) => {
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
    console.log("number")
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
      className={styles.editProfileForm}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.editProfileForm__photo__section}>
        <div
          onClick={addPhoto}
          role="button"
          className={styles.editProfileForm__photo__section__background}
        >
         {fields.uploadedPhoto ? <img src={fields.uploadedPhoto} className = {styles.editProfileForm__photo__section__background__img} alt ="avatar"/> : ""}
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
           {fields.uploadedPhoto ? "Edit Photo" : "Add Photo"}
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
        
           {
             fields.phoneNumbers ?
            fields.phoneNumbers.map((phoneNumber,index)=>
              
               (<li key ={index} className={styles.editProfileForm__addPhone__list}>
               
              <InputField
                type="tel"
                value={phoneNumber || ''}
                placeholder="Phone Number"
                onChange={(e) =>
                  changePhoneNumber( e.target.value,index, "phoneNumbers")
                }
              />
              <button onClick ={()=>removeData(index, "phoneNumbers")}      >
               <FileMinusFill size= "24" fill ="#fff"/>
              </button>
            </li>)
            )
            : null }
        
        <div role="button" onClick={openModal}>
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Phone Number</p>
        </div>
      </div>

      <div className={styles.editProfileForm__addEmail}>
        {
           
            fields.emails ?
           fields.emails.map((email,index)=>
             
              (<li key ={index} className={styles.editProfileForm__addPhone__list}>
              
             <InputField
               type="tel"
               value={fields.email || ''}
               placeholder="Email"
               onChange={(e) =>
                 changePhoneNumber( e.target.value,index, "phoneNumbers")
               }
             />
             <button onClick ={()=>removeData(index, "phoneNumbers")}      >
              <FileMinusFill size= "24" fill ="#fff"/>
             </button>
           </li>)
           )
           : null }
        
        <div onClick={openMailModal} role="button">
          <PlusCircleFill size="20" color="#5bc236" />
          <p>Add Email</p>
        </div>
      </div>

      <div className={styles.editProfileForm__deleteContact}>
        <button oncClick ={openDeleteModal}>Delete Contact</button>
      </div>
    </form>
  );
};

export default EditContactForm;
