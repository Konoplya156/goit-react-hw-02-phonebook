import PropTypes from 'prop-types';
import css from './DeleteButton.module.css';

export default function DeleteButton({ deleteContact, id }) {
  return (
    <button
      className={css.delButton}
      type="button"
      id={id}
      onClick={deleteContact}
    >
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
