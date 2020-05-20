import React from 'react';
import Contact from '../contacts/Contact';
import ContactForm from '../contacts/ContactForm';
import FilterContact from '../contacts/FilterContact';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <FilterContact />
        <Contact />
      </div>
    </div>
  );
};
export default Home;
