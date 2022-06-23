import styled from "styled-components";

export const TypeCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 146px;
  min-height: 88px;
  margin: 0 16px 10px 0;
  outline: 1px solid var(--color-beige);
  border-radius: 8px;
  padding: 12px 8px;
  cursor: pointer;
  ${({ active }) => active && `
    outline: 2px solid var(--color-green);
  `}
  
  &:hover {
    outline: 2px solid var(--color-green);
  }
  
  :last-child {
    @media (min-width: 1440px) {
      margin-right: 0; 
    }
  }
`;
