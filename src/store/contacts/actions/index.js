import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT,GET_CONTACT } from "../reducers";

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
    id: Math.floor(Math.random() * 10000000),
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
    id,
  };

 
};


export const getCurrentContact = (id) =>{
  return{
    type: GET_CONTACT,
    id
  }
}