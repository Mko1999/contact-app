export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

const initialState = {
  contacts: [
    {
      id: Math.floor(Math.random()*10000000),
      firstName: "Armen",
      lastName: "Armenyan",
      company: "Google",
      email: "Armenyan@gmail.com",
      phoneNumbers: ["077 07 07 07"],
    },

    {
      id: Math.floor(Math.random()*10000000),
      firstName: "Karine",
      lastName: "Armenyan",
      company: "Facebook",
      email: "Karen@gmail.com",
      phoneNumbers: ["077 77 07 07"],
    },

    {
      id: Math.floor(Math.random()*10000000),
      firstName: "Zara",
      lastName: "Armenyan",
      company: "Google",
      email: "Zara@gmail.com",
      phoneNumbers: ["070 07 07 07"],
    },
  ],
 
};

export const contactReducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          {
            id,
            ...payload
          },
          ...state.contacts
        ]
      };
    case EDIT_CONTACT:
      return { ...state, 
      contacts: state.contacts.map((contact)=>
        contact.id !== id ? contact : { ...contact, ...payload }
      ) };

    case DELETE_CONTACT:
      return { ...state ,
        contacts: state.contacts.filter((contact) => contact.id !== id),
      };

    default:
      return state;
  }
};
