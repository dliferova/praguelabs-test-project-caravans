import styled from "styled-components";
import Button from "../../ui/button/button";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const CaravansListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin: 0 0 40px;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ShowMoreButton = styled(Button)`
  place-self: center;
`;