import styled from "styled-components";

export const TypesListWrapper = styled.section`
    padding: 0 16px;
`;

export const TypesListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  
  @media (max-width: 1080px) {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
