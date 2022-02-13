import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.scss";
import { editContact } from "../../store/contacts/actions";
import { contactSelector } from "../../store/contacts/selectors";
const EditContactHeader = ({ fields }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contactList = useSelector(contactSelector);

  const sortContacts = contactList.sort((a, b) => a.id - b.id);

  const handleDoneClick = () => {
    dispatch(
      editContact({
        ...fields,
        id: sortContacts[sortContacts.length - 1].id + 1,
      })
    );
    navigate("/");
  };

  return (
    <div className={styles.editProfileHeader}>
      <Link to="/">
        <Button
          value="Cancel"
          background="#fff"
          color="#007aff"
          className={styles.editProfileHeader__cancel}
        />
      </Link>

      <Button
        value="Done"
        background="#fff"
        color="#007aff"
        className={styles.newContactHeader__done}
        onButtonClick={handleDoneClick}
      />
    </div>
  );
};

export default EditContactHeader;
