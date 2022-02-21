import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
} from "../reducers/contactReducer";

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const editContact = (id, newContact) => {
  return {
    type: EDIT_CONTACT,
    payload: newContact,
    id,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const setCurrentContact = (payload) => {
  return {
    type: SET_CONTACT,
    payload,
  };
};
