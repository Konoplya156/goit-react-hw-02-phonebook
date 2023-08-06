import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import DeleteButton from 'components/DeleteButton';

export default function Contacts({ contacts, deleteContact }) {
  if (!contacts.length) {
    return;
  }
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.contact} key={contact.number}>
            <span className={css.name}>{contact.name}</span>
            <span>{contact.number}</span>
            <DeleteButton deleteContact={deleteContact} id={contact.id} />
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};
