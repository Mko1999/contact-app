import React from "react";
import styles from "./contactpage.module.scss";
import blueIphone from "../../assets/blueiphone.png";
import { Navbar } from "..";
import ContactPageHeader from "../ContactPageHeader";
import { currentContactSelector } from "../../store/contacts/selectors";
import { useSelector,useDispatch } from "react-redux";
import {useParams} from "react-router-dom"
import {getCurrentContact} from "../../store/contacts/actions"

const ContactPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  dispatch(getCurrentContact(+id));
  const contact = useSelector(currentContactSelector);
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPage__content}>
        <div className={styles.contactPage__content__container}>
          <img src={blueIphone} alt="iphone"></img>
          <div className={styles.contactPage__mainContent}>
            <Navbar />
            <ContactPageHeader />
            <div className={styles.contactPage__contactPhoto}></div>
            <h2 className={styles.contactPage__contactName}>Name</h2>
          </div>
        </div>

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
                  Phone Number {contact.phoneNumbers.length > 1 && index + 1}
                </p>
                <a href={`tel: ${phoneNumber}`} className={styles.info__p}>
                  {phoneNumber}
                </a>
              </li>
            ))}
          {contact.email && (
            <li className={styles.info}>
              <p>Email</p>
              <p className={styles.info__p}></p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
