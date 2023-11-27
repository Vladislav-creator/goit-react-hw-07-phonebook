 import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ContactsList>
      {visibleContacts.map(({isFavourite, name, phone, id}) => (
        <ContactsListItem isFavourite={isFavourite} key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};