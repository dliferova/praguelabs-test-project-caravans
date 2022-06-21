import * as React from 'react';
import styled from "styled-components";
import {Box, Slider} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {GreyTextRegular, TextSize} from "../text/text";
import {theme} from "../../../default-styles";

function valuetext(value) {
    return `${value}Kč`;
}

const minDistance = 10;

const RangeSlider = () => {
    const [value, setValue] = React.useState([1200, 7600]);

    // const [startValue, setStartValue] = React.useState(1200);
    // const [endValue, setEndValue] = React.useState(7600);

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value)
    }

    return (
        <PriceRangeWrapper>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    display: 'inline-block',
                    maxWidth: 328,
                    marginRight: 2,
                }}>
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
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        onChange={handleChange}
                    />
                    <InputsWrapper>
                        <Input
                            value={value[0]}
                        />
                        <Input
                            value={value[1]}
                        />
                    </InputsWrapper>
                </Box>
            </ThemeProvider>
        </PriceRangeWrapper>
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

const PriceRangeWrapper = styled.div`
  padding: 0 16px 0 0;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`