import { filterContacts } from "../../utils/contactHelper";

export const currentContactSelector = (state) => state.contacts.currentContact;
export const contactSelector = (state) =>
  filterContacts(state.search.value, state.contacts.contacts);
