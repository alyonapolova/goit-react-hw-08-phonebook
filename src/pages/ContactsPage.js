import Contacts from 'components/Contacts/Contacts';

import FormContacts from 'components/Form/FormContacts';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contact = info => {
    dispatch(addContact(info));
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      <FormContacts contact={contact} />
      <Contacts />
    </div>
  );
};

export default ContactsPage;
