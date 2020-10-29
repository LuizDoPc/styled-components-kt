import styled from 'styled-components';

export const StyledParent = styled.div`
  display: grid;
  height: 90vh;
  grid-template: auto 1fr auto / auto 1fr auto;
`;

export const StyledHeader = styled.header`
  padding: 2rem;
  grid-column: 1 / 4;
  border: 1px solid black;
`;

export const StyledLeft = styled.div`
  grid-column: 1 / 2;
  border: 1px solid black;
  padding: 20px;
`;

export const StyledMain = styled.main`
  grid-column: 2 / 3;
  border: 1px solid black;
  padding: 20px;
`;

export const StyledRight = styled.div`
  grid-column: 3 / 4;
  border: 1px solid black;
  padding: 20px;
`;

export const StyledFooter = styled.footer`
  grid-column: 1 / 4;
  border: 1px solid black;
  padding: 20px;
`;
