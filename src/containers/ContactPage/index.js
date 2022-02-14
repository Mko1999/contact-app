import React from "react";
import styles from "./contactpage.module.scss";
import blueIphone from "../../assets/blueiphone.png";
import { Navbar } from "..";
import ContactPageHeader from "../ContactPageHeader";
import { currentContactSelector } from "../../store/contacts/selectors";
import { useSelector,useDispatch } from "react-redux";
import { Telegram, Mailbox } from "react-bootstrap-icons";
import {useParams} from "react-router-dom"
import {setCurrentContact} from "../../store/contacts/actions"

const ContactPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams();
  dispatch(setCurrentContact(+id))
  const contact = useSelector(currentContactSelector);

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPage__content}>
        <div className={styles.contactPage__content__container}>
          <img className = {styles.contactPage__content__container__iphone} src={blueIphone} alt="iphone"></img>
          <div className={styles.contactPage__mainContent}>
            <Navbar />
            <ContactPageHeader />
            <div className={styles.contactPage__contactPhoto}>
              {
                contact.uploadedPhoto ? <img src= {contact.uploadedPhoto} alt = "avatar" className={styles.contactPage__contactPhoto__img}/> : <p>{contact.firstName.charAt(0)}</p>
              }
              
            </div>
            <h2 className={styles.contactPage__contactName}>
              {contact.firstName} {contact.lastName}
            </h2>

            <div className={styles.contactPage__actions}>
              <ul>
                <li
                  className={
                    !contact.phoneNumbers[0] ? styles.hidden : styles.block
                  }
                >
                  <a href={`tel: ${contact.phoneNumbers[0]}`}>
                    <div className={styles.contactPage__actions__btn}>
                      <Telegram size="48" fill="#007aff" />
                      <p>Call</p>
                    </div>
                  </a>
                </li>
                <li
                  className={!contact.emails[0] ? styles.hidden : styles.block}
                >
                  <a href={`mailto: ${contact.emails[0]}`}>
                    <div className={styles.contactPage__actions__btn}>
                      <Mailbox size="48" fill="#007aff" />
                      <p>Email</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.contactPage__detailedInfo}>
              <ul>
                {contact.company && (
                  <li className={styles.info}>
                    <p>Company</p>
                    <p className={styles.info_p}>{contact.company}</p>
                  </li>
                )}
                {contact.phoneNumbers[0] &&
                  contact.phoneNumbers.map((phoneNumber, index) => (
                    <li key={index} className={styles.info}>
                      <p>
                        Phone Number{" "}
                        {contact.phoneNumbers.length > 1 && index + 1}
                      </p>
                      <a
                        href={`tel: ${phoneNumber}`}
                        className={styles.info__p}
                      >
                        {phoneNumber}
                      </a>
                    </li>
                  ))}
                {contact.emails[0] &&
                  contact.emails.map((email, index) => (
                    <li key={index} className={styles.info}>
                      <p>Email {contact.emails.length > 1 && index + 1}</p>
                      <a href={`mailto: ${email}`} className={styles.info__p}>
                        {email}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
