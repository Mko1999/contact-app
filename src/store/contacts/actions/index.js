import { ADD_CONTACT,EDIT_CONTACT,DELETE_CONTACT } from "../reducers";

export const addContact = (contact) =>{
    return{
        type: ADD_CONTACT,
        payload: contact,
        id: Math.floor(Math.random()* 1000000),

    }
}

export const deleteContact = (id) => {
    return{
        type: DELETE_CONTACT,
        id
    }
}

export const editContact = (id,newContact) =>{
    return{
        type: EDIT_CONTACT,
        payload: newContact,
        id

    }
}