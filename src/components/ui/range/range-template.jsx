import * as React from 'react';
import {Box, Slider} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {GreyTextRegular, TextSize} from "../text/text";
import {theme} from "../../../default-styles";
import {PriceRangeWrapper} from "./styles";
import {InputsWrapper, Input} from "../input/input";

function valuetext(value) {
    return `${value}Kč`;
}

const minDistance = 10;

const RangeSlider = () => {
    const [value, setValue] = React.useState([1200, 7600]);

    // const [startValue, setStartValue] = React.useState(1200);
    // const [endValue, setEndValue] = React.useState(7600);

    const handleChange = (event) => {
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
                            type="number"
                            value={value[0]}
                            onChange={handleChange}
                        />
                        <Input
                            type="number"
                            value={value[1]}
                            onChange={handleChange}
                        />
                    </InputsWrapper>
                </Box>
            </ThemeProvider>
        </PriceRangeWrapper>
    );
}

export default RangeSlider;