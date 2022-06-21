import styled from "styled-components";

export const TypeCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 146px;
  min-height: 88px;
  margin: 0 16px 10px 0;
  border: 1px solid var(--color-beige);
  border-radius: 8px;
  padding: 12px 8px;
  cursor: pointer;
  ${({ active }) => active && `
    border: 2px solid var(--color-green);
  `}
  
  &:hover {
    border: 1px solid var(--color-green);
  }
  
  :last-child {
    @media (min-width: 1440px) {
      margin-right: 0; 
    }
  }
`;

export const TypeCardDescription = styled.span`
  color: var(--color-dark-grey);
  font-size: 12px;
  font-weight: normal;
  line-height: 110%;
`;