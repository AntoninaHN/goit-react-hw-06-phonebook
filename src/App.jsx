

import { useSelector, shallowEqual, useDispatch } from "react-redux";

import phonebookActions from "./redux/actions";
import { getContacts, getFilter } from "./redux/selectors";

import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

import styles from './App.css'

const App = () => {

  const contacts = useSelector(getContacts, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);
  const dispatch = useDispatch();

  const addContact = (data) => {
    const action = phonebookActions.addContact(data);
    console.log(data);
    const dublicate = contacts.find(item => item.name === data.name);
    if(dublicate){
          alert(`${data.name} is already in contact list`);
          return;
    }
    dispatch(action)
  };

  const deleteContact = (id) => {
    dispatch(phonebookActions.deleteContact(id))
  };

  const changeFilter = ({ target }) => { 
    dispatch(phonebookActions.filterContacts(target.value));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts
    }
    const filterText = filter.toLowerCase();
    const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filterText));
    return filteredContacts;
  }

  const filteredContacts = getFilteredContacts();
  return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
  );
}

export default App;