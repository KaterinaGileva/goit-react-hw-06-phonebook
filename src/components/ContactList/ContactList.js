import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';

export default function ContactList() {

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));
  
  let getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <>
  <ul className={css.list}>
    {visibleContacts.map(({ id, name, number }) => (
      <li className={css.item}
        key={id}
      >
       <p className={css.name}>{name}:<span className={css.number}>{number}</span></p>
        <button
          type="button"
          className={css.btn}
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
  </>
);
}

ContactList.propTypes = {
  handleDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

