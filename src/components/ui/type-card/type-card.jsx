import React from 'react';
import styled from "styled-components";

const TypeCard = ({typ, description}) => {
    return (
        <TypeCardWrapper>
            <TypeCardHeading>{typ}</TypeCardHeading>
            <TypeCardDescription>{description}</TypeCardDescription>
        </TypeCardWrapper>
    );
};

export default TypeCard;

const TypeCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 156px;
  min-height: 88px;
  margin: 0 16px 0 0;
  border: 2px solid #EDEAE3;
  border-radius: 8px;
  padding: 12px 8px;
  
  :last-child {
    margin-right: 0;
  }
`;

const TypeCardHeading = styled.h3`
  font-size: 16px;
  color: var(--color-dark-blue);
  font-weight: normal;
  margin: 0 0 5px;
`;

const TypeCardDescription = styled.span`
  color: var(--color-dark-grey);
  font-size: 12px;
  line-height: 110%;
`;