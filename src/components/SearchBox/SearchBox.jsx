import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
