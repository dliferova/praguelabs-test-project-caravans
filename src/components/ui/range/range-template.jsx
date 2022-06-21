import * as React from 'react';
import styled from "styled-components";
import {Box, Slider} from '@mui/material';
import {GreyTextRegular, TextSize} from "../text/text";

function valuetext(value) {
    return `${value}Kč`;
}

const RangeSlider = () => {
    const [value, setValue] = React.useState([1200, 7600]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: 320}}>
            <GreyTextRegular
                as="h3"
                size={TextSize.MEDIUM}
                marginBottom={'16px'}
            >Cena za den
            </GreyTextRegular>
            <Slider
                getAriaLabel={() => 'Price range'}
                min={1200}
                max={7600}
                value={value}
                color="secondary"
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            <InputsWrapper>
                <Input/>
                <Input/>
            </InputsWrapper>
        </Box>
    );
}

export default RangeSlider;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  width: 156px;
  min-height: 48px;
  border: 1px solid #EDEAE3;
  border-radius: 8px;
  color: var(--color-dark-blue);
  margin: 0 16px 0 0;
  
  &:last-of-type {
    margin: 0;
  }
`;

const Label = styled.label`
  text-align: end;
  color: var(--color-dark-grey);
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
`;

const TitleSmall = styled.h4`
  font-size: 16px;
  line-height: 100%;
  color: var(--color-dark-grey);
  font-weight: normal;
`;