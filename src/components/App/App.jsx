import css from 'components/App/App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1> 
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList /> 
    </div>
  );
};