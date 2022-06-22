import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  width: 156px;
  min-height: 48px;
  border: 1px solid #EDEAE3;
  border-radius: 8px;
  color: var(--color-dark-blue);
  margin: 0 16px 0 0;
  padding: 13px 12px;
  
  &:last-of-type {
    margin: 0;
  }
`;