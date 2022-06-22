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

const RangeSlider = ({ onPriceUpdate }) => {
    const [priceValue, setPriceValue] = React.useState([1200, 7600]);

    const onPriceChange = (priceValue) => {
        onPriceUpdate(priceValue)
    }

    const handleChange = (event) => {
        setPriceValue(event.target.value);
        onPriceChange(event.target.value);
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
                        value={priceValue}
                        color="secondary"
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        onChange={handleChange}
                    />
                    <InputsWrapper>
                        <Input
                            type="number"
                            value={priceValue[0]}
                            onChange={handleChange}
                        />
                        <Input
                            type="number"
                            value={priceValue[1]}
                            onChange={handleChange}
                        />
                    </InputsWrapper>
                </Box>
            </ThemeProvider>
        </PriceRangeWrapper>
    );
}

export default RangeSlider;