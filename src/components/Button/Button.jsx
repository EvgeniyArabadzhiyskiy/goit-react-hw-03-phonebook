import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ type, children, width, onClick }) => {
  return (
    <StyledButton type={type} width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  children: null,
  width: null,
  onClick: () => null,
}

Button.propTypes = {
  type: PropTypes.string,
  width: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
