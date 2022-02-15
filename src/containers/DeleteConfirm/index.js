import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DeleteConfirm.module.scss";
import { useNavigate } from "react-router";
import { deleteContact } from "../../store/contacts/actions";
import {
  currentContactSelector,
  contactSelector,
} from "../../store/contacts/selectors";

const DeleteConfirm = ({ showModal, setShowModal }) => {
  // function useOnClickOutside(ref, handler) {
  //   useEffect(
  //     () => {
  //       const listener = (event) => {

  //         if (!ref.current || ref.current.contains(event.target)) {
  //           return;
  //         }
  //         handler(event);
  //       };
  //       document.addEventListener("mousedown", listener);
  //       document.addEventListener("touchstart", listener);
  //       return () => {
  //         document.removeEventListener("mousedown", listener);
  //         document.removeEventListener("touchstart", listener);
  //       };
  //     },

  //     [ref, handler]
  //   );

  // const modal = document.getElementById("modal")

  // modal.addEventListener("click",()=>{
    
  // })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const modalRef = useRef();
  // useOnClickOutside(ref, () => setModalOpen(false));
  const currentContact = useSelector(currentContactSelector);
  const contact = useSelector(contactSelector);
  const deleteContactEvent = () => {
    console.log(currentContact);
    dispatch(deleteContact(currentContact.id));
    navigate(-2);
    console.log(contact);
  };
  const cancelEvent = (e) => {
    if(e.target.id !=="modal" && e.target.id!== "cancelBtn"){
      return
    }
    setShowModal(false);
  };
  return (
    showModal && (
      <div role="button" id = "modal" onClick = {cancelEvent} className={styles.deleteConfirm}>
        <div className={styles.deleteConfirm__modal}>
          <p className={styles.deleteConfirm__message}>
            Are you sure you want to delete contact
          </p>
          <div className={styles.deleteConfirm__buttons}>
            <button
              onClick={deleteContactEvent}
              className={styles.deleteConfirm__deleteBtn}
            >
              Delete
            </button>
            <button id ="cancelBtn"
              onClick={cancelEvent}
              className={styles.deleteConfirm__cancelBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteConfirm;
