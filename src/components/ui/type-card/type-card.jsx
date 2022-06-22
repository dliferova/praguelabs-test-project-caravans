import React from 'react';
import { TypeCardWrapper } from "./styles";
import { TextBoldHeading, TextSize, GreyTextRegular } from "../text/text";

const TypeCard = ({typ, description, isActive, onClick}) => {

    return (
        <TypeCardWrapper active={isActive} onClick={onClick}>
            <TextBoldHeading
                size={TextSize.MEDIUM}
                marginBottom={'5px'}
            >{typ}</TextBoldHeading>
            <GreyTextRegular
                size={TextSize.EXTRA_SMALL}
            >
                {description}
            </GreyTextRegular>
        </TypeCardWrapper>
    );
};

export default TypeCard;
