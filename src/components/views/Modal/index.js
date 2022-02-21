import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Modal.module.scss";
import { noop } from "../../../utils/noop";
import { deleteContact } from "../../../store/actions";
import { currentContactSelector } from "../../../store/selectors";

const Modal = ({ showModal, setShowModal, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = useSelector(currentContactSelector);

  const deleteContactEvent = () => {
    dispatch(deleteContact(currentContact.id));
    navigate(-2);
  };

  const cancelEvent = (e) => {
    if (e.target.id !== "modal" && e.target.id !== "cancelBtn") {
      return;
    }

    setShowModal(false);
  };
  return (
    showModal && (
      <div
        role="button"
        id="modal"
        onClick={cancelEvent}
        className={styles.modal}
      >
        <div className={styles.modal__alert}>
          <p className={styles.modal__message}>{title}</p>
          <div className={styles.modal__buttons}>
            <button
              onClick={deleteContactEvent}
              className={styles.modal__buttons__deleteBtn}
            >
              Delete
            </button>
            <button
              id="cancelBtn"
              onClick={cancelEvent}
              className={styles.modal__buttons__cancelBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  setShowModal: PropTypes.func,
};

Modal.defaultProps = {
  setShowModal: noop,
};

export default Modal;
