import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  min-height: 48px;
  border: 1px solid var(--color-beige);
  border-radius: 8px;
  color: var(--color-dark-blue);
  padding: 13px 12px;
  cursor: pointer;
  width: 156px;
  
  &:last-of-type {
    margin: 0;
  }
  
  &:hover {
    border: 1px solid var(--color-green);
  }
`;

export const StyledInput = styled.div`
  position: relative;
  margin: 0 14px 0 0;

  &:after {
    content: " Kč";
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9C8C8C;
    font-size: 16px;
    margin: 0;
  }
`;