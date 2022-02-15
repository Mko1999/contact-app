import { filterContacts } from "../../../utils/contactHelper";

export const contactSelector = (state) =>
  filterContacts(state.search.value, state.contacts.contacts);

export const currentContactSelector = (state) => state.contacts.currentContact;
