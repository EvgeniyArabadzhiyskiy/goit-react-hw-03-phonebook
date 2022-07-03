import styled from 'styled-components';

export const UserName = styled.span`
  width: 150px;
  font-size: ${prop => prop.theme.fontSizes.m};
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
`;

export const UserNumber = UserName;
