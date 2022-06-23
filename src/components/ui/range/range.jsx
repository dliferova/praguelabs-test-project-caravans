import * as React from 'react';
import {Box, Slider} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {GreyTextRegular, TextSize} from "../text/text";
import {theme} from "../../../default-styles";
import {PriceRangeWrapper} from "./styles";
import {InputsWrapper, Input, StyledInput} from "../input/input";
import {useEffect} from "react";

function valuetext(value) {
    return `${value}Kč`;
}

const RangeSlider = ({ onPriceUpdate }) => {
    const [priceValue, setPriceValue] = React.useState([1200, 7600]);

    useEffect(() => {
        onPriceUpdate(priceValue)
    }, [priceValue])

    const handleChange = (event) => {
        setPriceValue(event);
    }

    const handleChangeInputMin = (event) => {
        setPriceValue([event, priceValue[1]]);
    }

    const handleChangeInputMax = (event) => {
        setPriceValue([priceValue[0], event]);
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
                        onChange={(evt)=> {handleChange(evt.target.value)}}
                        sx={{
                            marginBottom: 2,
                        }}
                    />
                    <InputsWrapper>
                        <StyledInput content={'Kč'}>
                            <Input
                                type="number"
                                multiple={true}
                                value={priceValue[0]}
                                onChange={(evt)=> {handleChangeInputMin(evt.target.value)}}
                            />
                        </StyledInput>
                        <StyledInput>
                            <Input
                                type="number"
                                value={priceValue[1]}
                                onChange={(evt)=> {handleChangeInputMax(evt.target.value)}}
                            />
                        </StyledInput>
                    </InputsWrapper>
                </Box>
            </ThemeProvider>
        </PriceRangeWrapper>
    );
}

export default RangeSlider;