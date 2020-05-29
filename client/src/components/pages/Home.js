import React, { useContext, useEffect } from 'react';
import Contact from '../contacts/Contact';
import ContactForm from '../contacts/ContactForm';
import FilterContact from '../contacts/FilterContact';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
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
