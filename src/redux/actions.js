import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
//import item from "./contactTypes";
const addContact = createAction("phonebook/addContact", (contact) => ({
  payload: {
    id: nanoid(),
    name: contact.name,
    number: contact.number,
  },
}));

const deleteContact = createAction("phonebook/deleteContact");

const filterContacts = createAction("phonebook/filterContacts");

// const filterContacts = (value) => {
//   return {
//     type: item.FILTER_CONTACTS,
//     payload: value,
//   };
// };

const phonebookActions = { addContact, deleteContact, filterContacts };

export default phonebookActions;
