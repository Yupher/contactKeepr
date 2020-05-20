import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/ContactContext'


const ContactItem = ({ contact }) => {
  let contactContext = useContext(ContactContext)
  let {deleteContact, setCurrent, clearCurrent} = contactContext
  let { name, email, phone, id, type } = contact;

  const onDelete = ()=>{
    deleteContact(id)
    clearCurrent()
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            type === 'personal' ? 'badge badge-primary' : 'badge badge-success'
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope open" />{' '} {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />{' '} {phone}
          </li>
        )}
      </ul>
      <p>
        <button onClick={()=> setCurrent(contact)} className="btn btn-dark btn-sm">
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}
export default ContactItem;
