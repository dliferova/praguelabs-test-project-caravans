import styled from "styled-components";

export const PageWrapper = styled.section`
    width: 86%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
  
    @media (max-width: 1024px) {
      width: 100%;
    }
`;

export const HeadingH3 = styled.h3`
  font-size: 16px;
  line-height: 100%;
  color: var(--color-dark-grey);
  font-weight: normal;
`;