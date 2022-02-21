import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Telegram, Mailbox } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ContactPage.module.scss";

import blueIphone from "../../../assets/blueiphone.png";
import { Navbar } from "../../../components/views";
import Header from "./Header";

import { currentContactSelector } from "../../../store/selectors";
import { setCurrentContact } from "../../../store/actions";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentContact = useSelector(currentContactSelector);

  useEffect(() => {
    if (id) {
      dispatch(setCurrentContact(+id));
    }
  }, [id]);

  const phoneAction =
    currentContact &&
    currentContact.phoneNumbers[0] &&
    currentContact.phoneNumbers.map((phoneNumber, index) => (
      <li key={index} className={styles.info}>
        <p>
          Phone Number {currentContact.phoneNumbers.length > 1 && index + 1}
        </p>
        <a href={`tel: ${phoneNumber}`} className={styles.info__p}>
          {phoneNumber}
        </a>
      </li>
    ));

  const emailAction =
    currentContact &&
    currentContact.emails[0] &&
    currentContact.emails.map((email, index) => (
      <li key={index} className={styles.info}>
        <p>Email {currentContact.emails.length > 1 && index + 1}</p>
        <a href={`mailto: ${email}`} className={styles.info__p}>
          {email}
        </a>
      </li>
    ));

  return (
    currentContact && (
      <div className={styles.contact_page}>
        <div className={styles.contact_page__content}>
          <div className={styles.contact_page__content__container}>
            <img
              className={styles.contact_page__content__container__iphone}
              src={blueIphone}
              alt="iphone"
            />
            <div className={styles.contact_page__mainContent}>
              <Navbar />
              <Header />
              <div className={styles.contact_page__contactPhoto}>
                {currentContact.uploadedPhoto ? (
                  <img
                    draggable="false"
                    src={currentContact.uploadedPhoto}
                    alt="avatar"
                    className={styles.contact_page__contactPhoto__img}
                  />
                ) : (
                  <p>{currentContact.firstName?.charAt(0)}</p>
                )}
              </div>
              <h2 className={styles.contact_page__contactName}>
                {currentContact?.firstName} {currentContact?.lastName}
              </h2>

              <div className={styles.contact_page__actions}>
                {currentContact.phoneNumbers[0] ? (
                  <ul>
                    <li
                      className={
                        !currentContact.phoneNumbers[0]
                          ? styles.hidden
                          : styles.block
                      }
                    >
                      <a href={`tel: ${currentContact.phoneNumbers[0]}`}>
                        <div className={styles.contact_page__actions__btn}>
                          <Telegram size="48" fill="#007aff" />
                          <p>Call</p>
                        </div>
                      </a>
                    </li>
                    <li
                      className={
                        !currentContact.emails[0] ? styles.hidden : styles.block
                      }
                    >
                      <a href={`mailto: ${currentContact.emails[0]}`}>
                        <div className={styles.contact_page__actions__btn}>
                          <Mailbox size="48" fill="#007aff" />
                          <p>Email</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                ) : (
                  <p className={styles.contact_page__actions__nodata}>
                    No Data
                  </p>
                )}
              </div>

              <div className={styles.contact_page__detailedInfo}>
                <ul>
                  {currentContact.company && (
                    <li className={styles.info}>
                      <p>Company</p>
                      <p className={styles.info_p}>{currentContact.company}</p>
                    </li>
                  )}

                  {phoneAction}

                  {emailAction}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ContactPage;
