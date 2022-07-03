import { Box } from 'components/Box/Box';

const Container = ({ children }) => {
  return (
    <Box bg="container" width="1200px" m="0 auto" py={0} px={5}>
      {children}
    </Box>
  );
};

export default Container;
