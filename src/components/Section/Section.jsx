import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box bg="primary" width="800px" m="0 auto" p={4} textAlign="center" as="section">
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
