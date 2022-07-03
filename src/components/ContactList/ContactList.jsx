import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { Box } from '../Box/Box';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box border="normal" p={4} as="ul">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </Box>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <Box border="normal" p={4} as="ul">
//       <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
//     </Box>
//   );
// };

// export default ContactList;
