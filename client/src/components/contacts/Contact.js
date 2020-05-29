import React, { useContext, useEffect, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';
import { CSSTransition} from 'react-transition-group';
import Spinner from '../layout/Spinner';

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(
    () => {
      getContacts();
    },
    // eslint-disable-next-line
    []
  );

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please Add Contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contact;
