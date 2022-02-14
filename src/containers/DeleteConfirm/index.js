import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import styles from "./DeleteConfirm.module.scss";
import { deleteContact } from "../../store/contacts/actions";


// const deleteContactEvent = () =>{
// dispatch()
// }

// const cancelEvent = () =>{

// }

const DeleteConfirm = () => {

  const [showModal,setShowModal] = useState(false)
const dispatch = useDispatch()
  return (
    <div className={styles.deleteConfirm}>
      <div className={styles.deleteConfirm__modal}>
        <p className={styles.deleteConfirm__message}>
          Are you sure you want to delete contact
        </p>
        <div className={styles.deleteConfirm__buttons}>
          {/* <button onClick={deleteContactEvent} className={styles.deleteConfirm__deleteBtn}>Delete</button> */}
          {/* <button onClick = {cancelEvent} className={styles.deleteConfirm__cancelBtn}>Cancel</button> */}
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
