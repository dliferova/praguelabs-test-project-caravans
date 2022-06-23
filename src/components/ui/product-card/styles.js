import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  max-width: 392px;
  min-height: 190px;
  border: 1px solid var(--color-beige);
  border-radius: 8px;
  background-color: inherit;
  
  @media (max-width: 1024px) {
    margin: 0 auto;
    max-width: 343px;
  }
`;

export const ProductCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductCardInfoWrap = styled.div`
  padding: 0 7% 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductCardContentContainer = styled.div`
  border-bottom: 1px solid #EDEAE3;
  padding: 10px 0;
  
  &:last-of-type {
    border: none;
  }
`;

export const CardIconsGroup = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

export const GroupItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 6% 0 0;
`;

export const Counter = styled.span`
  font-size: 14px;
  color: var(--color-dark-blue);
  margin-left: 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceInfo = styled.b`
  font-size: 16px;
  line-height: 100%;
`;