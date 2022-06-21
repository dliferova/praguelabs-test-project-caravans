import React from 'react';
import { TypeCardWrapper } from "./styles";
import { TextBoldHeading, TextSize, GreyTextRegular } from "../text/text";

TextBoldHeading

const TypeCard = ({typ, description, onCLick}) => {

    onCLick = (event) => {
        console.log(event.currentTarget)
        console.log(typ)
    }

    return (
        <TypeCardWrapper onClick={onCLick}>
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
