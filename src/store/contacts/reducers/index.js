export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SET_CONTACT = "SET_CONTACT"

const initialState = {
  contacts: [
    {
      id: 0,
      firstName: "Karina",
      lastName: "Armenyan",
      company: "Google",
      emails: ["Karine@gmail.com", "Kar@gmail.com"],
      phoneNumbers: ["077 77 70 77"],
      uploadedPhoto: null,
    },
    {
      id: 1,
      firstName: "Armen",
      lastName: "Armenyan",
      company: "Google",
      emails: ["Armenyan@gmail.com"],
      phoneNumbers: ["077 07 07 07"],
      uploadedPhoto: null,
    },
    {
      id: 2,
      firstName: "Zara",
      lastName: "Armenyan",
      company: "Facebook",
      emails: ["Zara@gmail.com"],
      phoneNumbers: ["077 00 00 00"],
      uploadedPhoto: null,
    },
  ],
  currentContact: {},
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id !== payload.id ? contact : { ...contact, ...payload }
        ),
      };

    case DELETE_CONTACT:
      return {
        ...state,
      };

   

  case SET_CONTACT: 
  return {
    ...state,
    currentContact: state.contacts.find((contact)=> contact.id === payload)
  }
    default:
      return state;
  }
};
