import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Henery V',
        email: 'henery@kingofengland.uk',
        phone: '02315879236',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Frederick Williams I',
        email: 'frederick@williams.pru',
        phone: '02315879236',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Charles VI',
        email: 'charles@hubsburg.hre',
        phone: '02315879236',
        type: 'professional',
      },
      {
        id: 4,
        name: 'Henery VIII',
        email: 'henerywillinvadefrance@kingofengland.uk',
        phone: '02315879236',
        type: 'personal',
      },
      {
        id: 5,
        name: 'Frederick Williams the great',
        email: 'frederickIwonthe7yearswar@williams.pru',
        phone: '02315879236',
        type: 'personnal',
      },
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add a contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update a contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //filter contact
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //clear filter contact
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter 
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
