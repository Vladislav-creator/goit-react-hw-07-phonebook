import { useSelector } from 'react-redux';

import { selectContactsFilter, selectContactsList } from 'redux/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

//   console.log(visibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({isFavourite, name, phone, id}) => (
        <ContactsListItem isFavourite={isFavourite} key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};