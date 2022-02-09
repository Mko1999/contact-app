import React, { useState, useEffect, useRef } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
import { InputField } from "../../components";
import styles from "./form.module.scss";
import { useDispatch,useSelector } from "react-redux";
import { addContact } from "../../store/contacts/actions";
import { useNavigate} from "react-router-dom"


const Form = ({submit,setSubmit}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const dispatch = useDispatch()

  const navigate = useNavigate()

  if(submit){
    dispatch(addContact({
      firstName,
      lastName,
      company,
      
    }));
    navigate({ pathname: '/' })
  }

  const addPhoto = (event) => {
    const photo = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <form
      autoComplete="off"
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.form__photo__section}>
        <div className={styles.form__photo__section__background}></div>
        <input
          type="file"
          className={styles.form__fileInput}
          accept="image/*,.pdf"
          onChange={addPhoto}
        />
      </div>
      <div className={styles.form__photo__section__addPhoto}>
        <p>Add photo</p>
      </div>

      <ul className={styles.form__inputList}>
        <li>
          <InputField
            value={firstName}
            placeholder="First Name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </li>
        <li>
          <InputField
            value={lastName}
            placeholder="Last Name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </li>
        <li>
          <InputField
            value={company}
            placeholder="Company"
            type="text"
            onChange={(e) => setCompany(e.target.value)}
          />
        </li>
      </ul>

      <div className={styles.form__addPhone}>
        <div role="button">
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

export default Form;
