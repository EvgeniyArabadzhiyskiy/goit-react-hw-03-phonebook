import styled from "styled-components"

export const StyledButton = styled.button`
    cursor: pointer;
    border: ${prop => prop.theme.borders.none};
    border-radius: ${prop => prop.theme.radii.normal};
    width: ${prop => prop.width ? `${prop.width}px` : null};
    padding: ${prop => prop.theme.space[2]}px ${prop => prop.theme.space[3]}px ;
    color: ${prop => prop.theme.colors.whtBtn};
    background-color: ${prop => prop.type === "button" ? prop.theme.colors.primaryBtn : prop.theme.colors.blue};
    transition:  background-color 300ms linear;

    &:hover, &:focus{
        background-color: ${prop => prop.type === "button" ? prop.theme.colors.hover : prop.theme.colors.primaryBtn};
    }
`;