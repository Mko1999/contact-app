import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../../../../components/shared";
import { ArrowLeft } from "react-bootstrap-icons";

import { currentContactSelector } from "../../../../store/selectors";

const Header = () => {
  const contact = useSelector(currentContactSelector);

  return (
    <div className={styles.contact_page_header}>
      <div className={styles.contact_page_header__go_back_button}>
        <Link to="/">
          <ArrowLeft
            size="24"
            color="#007aff"
            className={styles.contact_page_header__left_arrow}
          />

          <Button value="Contacts" color="#007aff" />
        </Link>
      </div>
      <div className={styles.contact_page_header__edit_page}>
        <Link to={`/contact/${contact.id}/edit`}>
          <Button value="Edit" color="#007aff" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
