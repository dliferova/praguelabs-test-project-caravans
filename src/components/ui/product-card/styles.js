import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  max-width: 392px;
  min-height: 190px;
  border: 1px solid var(--color-beige);
  border-radius: 8px;
  background-color: inherit;
`;

export const ProductCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductCardImageWrap = styled.div`
  min-height: 190px;
  background-color: var(--color-dark-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductCardInfoWrap = styled.div`
  padding: 10px 30px;
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

export const TextAccent = styled.p`
  text-transform: uppercase;
  color: var(--color-orange);
  font-size: 12px;
  line-height: 100%;
`;

export const HeadingH2 = styled.h2`
  font-size: 24px;
  line-height: 100%;
  margin: 0;
`;

export const CardIconsGroup = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const StyledIcon = styled.div`
  display: block;
  width: 45px;
  height: 45px;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    width: 25px;
    top: 0;
    left: 0;
  }
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