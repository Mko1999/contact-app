import React from "react";
import styles from "./Main.module.scss";

import blueiphone from "../../../assets/blueiphone.png";
import { SearchBar } from "../../../components/shared";
import { AddContact, List } from "../../../components/views";

import { Navbar } from "../../../components/views";
import { useSelector } from "react-redux";
import { contactSelector } from "../../../store/selectors";

const Main = () => {
  const contacts = useSelector(contactSelector);

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <img alt="iphone" src={blueiphone} className={styles.main__iphone} />
        <div className={styles.main__absolute}>
          <Navbar />
          <AddContact />
          <SearchBar />
          <List contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default Main;
