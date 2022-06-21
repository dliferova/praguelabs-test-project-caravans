import styled from "styled-components";

export const DecoratedSection = styled.section`
  border-bottom: 1px solid var(--color-light-grey);
  border-top: 1px solid var(--color-light-grey);
  margin-bottom: 40px;
`;

export const FiltersWrapper = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: max-content 3fr max-content;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FilterItem = styled.div`
  position: relative;
  display: flex;
  border-right: 1px solid var(--color-light-grey);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--color-light-grey);
    justify-content: center;
  }
  
  &:last-of-type {
    border-right: none;

    @media (max-width: 1024px) {
      border-bottom: none;
    }
  }
`;