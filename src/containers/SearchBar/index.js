import React, { useState } from "react";
import styles from "./searchbar.module.scss";
import { Search } from "react-bootstrap-icons";
import { InputField } from "../../components";
import {searchSelector} from "../../store/search/selectors"
import { useDispatch , useSelector } from "react-redux"; 
import { setSearchValue } from "../../store/search/actions";

const SearchBar = () => {
  const [text, setText] = useState("");

  const searchValue = useSelector(searchSelector)
  const dispatch = useDispatch()
  return (
    <div className={styles.searchbar}>
      <p>
        <Search />
      </p>
      <InputField
        className={styles.searchbar__input}
        value={searchValue}
        placeholder="Search"
        type="text"
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;
