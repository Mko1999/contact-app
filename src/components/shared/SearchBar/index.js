import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

import styles from "./SearchBar.module.scss";
import { InputField } from "..";
import { setSearchValue } from "../../../store/actions";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const filterSearch = (e) => {
    setText(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };

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
        onChange={filterSearch}
      />
      <div></div>
    </div>
  );
};

export default SearchBar;
