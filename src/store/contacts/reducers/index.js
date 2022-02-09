export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const GET_CONTACT = "GET_CONTACT"

const initialState = {
  contacts: [
    {
      id: Math.floor(Math.random() * 1000000000),
      firstName: "Karina",
      lastName: "Armenyan",
      company: "Google",
      email: "Karine@gmail.com",
      phoneNumbers: ["077 77 70 77"],
    },
    {
      id: Math.floor(Math.random() * 1000000000),
      firstName: "Armen",
      lastName: "Armenyan",
      company: "Google",
      email: "Armenyan@gmail.com",
      phoneNumbers: ["077 07 07 07"],
    },
    {
      id: Math.floor(Math.random() * 1000000000),
      firstName: "Zara",
      lastName: "Armenyan",
      company: "Facebook",
      email: "Zara@gmail.com",
      phoneNumbers: ["077 00 00 00"],
    },
  ],
  currentContact: {}
};

export const contactReducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [{ id, ...payload }, ...state.contacts],
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id !== id ? contact : { ...contact, ...payload }
        ),
      };

    case DELETE_CONTACT:
      return {
        ...state,
      };

      case GET_CONTACT:
        return {
          ...state,
          currentContact: state.contacts.find((contact)=> id === contact.id)
        }

    default:
      return state;
  }
};
