import React from "react";
import styles from "./content.module.scss";
import blueiphone from "../../assets/blueiphone.png";
import { AddContact, SearchBar, Navbar, ContactList } from "..";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <img alt="iphone" src={blueiphone} className={styles.content__iphone} />
        <div className={styles.content__absolute}>
          <Navbar />
          <AddContact />
          <SearchBar />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Content;
