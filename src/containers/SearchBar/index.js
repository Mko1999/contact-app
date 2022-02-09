import React, { useState } from "react";
import styles from "./searchbar.module.scss";
import { Search } from "react-bootstrap-icons";
import { InputField } from "../../components";

const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <div className={styles.searchbar}>
      <p className={styles.searchbar__icon}>
        <Search />
      </p>
      <InputField
        className={styles.searchbar__input}
        value={text}
        placeholder="Search"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
