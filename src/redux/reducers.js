import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./actions";
//import item from "./contactTypes";
// const baseContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const items = createReducer([], {
  [phonebookActions.addContact]: (state, { payload }) => {
    state.push(payload)
  },
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer('', {
  [phonebookActions.filterContacts]: (_, { payload }) => payload,
});
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case item.FILTER_CONTACTS:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
