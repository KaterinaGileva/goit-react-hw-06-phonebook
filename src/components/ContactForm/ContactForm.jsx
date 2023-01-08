import  React, { useState } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contact = useSelector(getContacts); 
   
  const formAddContact = (name, number) => dispatch(addContact(name, number));

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const availableContact = contact.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (availableContact) {
      alert.info(`${name} is already in contacts`);
      return;
    } else {
      formAddContact(name, number);
    }

    setName('');
    setNumber('');
  };

        return (
           <form className={css.form} onSubmit={handleSubmit}>
               <label className={css.name} >
                 Name
                 <input
                   type="text"
                   name='name'
                   value={name}
                   className={css.input}
                  onChange={handleChange}     
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                 /> 
               </label> 
               <label className={css.number} >
                  Number 
                 <input
                   type="tel"
                   name='number'
                   value={number}
                   className={css.input}
                   onChange={handleChange}
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
               />
               </label>
            <button type="submit" className={css.formBtn}>Add contact</button>
       </form>
           );
         }