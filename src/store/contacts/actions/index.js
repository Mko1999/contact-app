import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
} from "../reducers";

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
    // id: ,
  };
};

export const editContact = (id, newContact) => {
  console.log("barev",id,newContact)
  return {
    type: EDIT_CONTACT,
    payload: newContact,
    id,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    id,
  };
};

export const setCurrentContact = (payload) => {
  return {
    type: SET_CONTACT,
    payload,
  };
};
