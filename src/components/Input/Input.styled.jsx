import styled from 'styled-components';
import { Field } from 'formik';

export const StyledInput = styled(Field)`
  display: block;
  margin-top: ${prop => prop.theme.space[3]}px;
  border-radius: ${prop => prop.theme.radii.normal};
  border: ${prop => prop.theme.borders.normal};
  outline: none;

  &:focus {
    outline: 2px solid blue;
  }
`;
