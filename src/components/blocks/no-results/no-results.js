import React from 'react';
import {
    TextSize,
    TextBoldHeading,
    Text
} from "../../ui/text/text"

const NoResults = () => {
    return (
        <div>
            <TextBoldHeading
                size={TextSize.BIG}
                marginBottom="28px"
            >Hmmm....
            </TextBoldHeading>
            <TextBoldHeading
                size={TextSize.MEDIUM}
                marginBottom="28px">
                We could't find any matches for your request
            </TextBoldHeading>
            <Text
                size={TextSize.MEDIUM}
                marginBottom="28px">
            Please, try again
            </Text>
        </div>
    );
};

export default NoResults;