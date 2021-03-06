import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        type: 'personal',
        phone: '',
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    type: 'personal',
    phone: '',
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(current === null){
      addContact(contact);
    }else{
      updateContact(contact)
    }
    clearAll()
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current === null ? 'Add Contact' : 'Edit Contact'}
      </h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Phone"
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type="submit"
          value={current === null ? 'Add Contact' : 'Edit Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current !== null && (
        <div>
          <button
            type="button"
            className="btn btn-light btn-block"
            onClick={clearAll}
          >
            Add Contact
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
