import Contacts from 'components/Contacts/Contacts';

import FormContacts from 'components/Form/FormContacts';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contact = info => {
    dispatch(addContact(info));
  };
  return (
    <div>
      <FormContacts contact={contact} />
      <Contacts />
    </div>
  );
};

export default ContactsPage;
