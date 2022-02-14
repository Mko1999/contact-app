import React, { useState } from "react";
import styles from "./searchbar.module.scss";
import { Search } from "react-bootstrap-icons";
import { InputField } from "../../components";
import {useDispatch,useSelector} from "react-redux"
import { setSearchValue } from "../../store/search/actions";
import { contactSelector } from "../../store/contacts/selectors";
import { sortContacts,groupContacts,filterContacts } from "../../utils/contactHelper";
import {ContactList} from ".."

const SearchBar = () => {
  const [text, setText] = useState("");

  const contacts = useSelector(contactSelector);
  const filteredContacts = filterContacts(text,contacts)
  const dispatch = useDispatch()

  const filterSearch = (e) =>{
    setText(e.target.value)
   dispatch(setSearchValue(e.target.value))
  }

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
      <div>
        <ContactList contacts = {filteredContacts}/>
       
      </div>
    </div>
  );
};

export default SearchBar;
