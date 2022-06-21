import styled from "styled-components";
import {Text} from "../../ui/text/text";

export const TypesListWrapper = styled.section`
`;

export const TypesListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
