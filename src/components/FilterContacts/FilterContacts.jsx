import PropTypes from 'prop-types';
import { StyledInput } from './Filtercontacts.styled';

const FilterContacts = ({ value, onChangeInput }) => {
  return (
    <div>
      <StyledInput type="text" name="search" value={value} onChange={onChangeInput} />
    </div>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default FilterContacts;
