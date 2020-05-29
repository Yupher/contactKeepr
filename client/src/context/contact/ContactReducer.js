import {
  ADD_CONTACT,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  DELETE_CONTACT,
  CONTACT_ERRORS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return{
        ...state,
        contacts: action.payload,
        loading: false
      }
    case CLEAR_CONTACTS:
      return{
        ...state,
        contacts: null,
        filtered: null,
        current: null,
        error: null
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case FILTER_CONTACT:
      {
        return{
          ...state,
          filtered: state.contacts.filter(contact=>{
            const regex = new RegExp(`${action.payload}`, 'gi')
            return  contact.name.match(regex) ||
              contact.email.match(regex) ||
              contact.phone.match(regex) 
          }),
          
        }
      }
    case CLEAR_FILTER:
      return{
        ...state,
        filtered: null
      }
    case CONTACT_ERRORS:
      return{
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
