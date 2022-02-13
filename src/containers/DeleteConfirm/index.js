import React from "react";
import styles from "./DeleteConfirm.module.scss";

const DeleteConfirm = () => {
  return (
    <div className={styles.deleteConfirm}>
      <div className={styles.deleteConfirm__modal}>
        <p className={styles.deleteConfirm__message}>
          Are you sure you want to delete contact
        </p>
        <div className={styles.deleteConfirm__buttons}>
          <button className={styles.deleteConfirm__deleteBtn}>Delete</button>
          <button className={styles.deleteConfirm__cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
