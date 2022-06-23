import React from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';
import styled from "styled-components";
import Image from 'next/image';
import {theme} from "../../../theme-styles";
import {GreyTextRegular, TextSize, TextWithIcon} from "../text/text";
import {ThemeProvider} from "@mui/material/styles";

const SelectInput = ({ onSelectUpdate }) => {
    const [status, setStatus] = React.useState('true');

    const onSelectChange = (selectedItem) => {
        onSelectUpdate(selectedItem)
    }

    const handleChange = (event) => {
        setStatus(event.target.value);
        onSelectChange(event.target.value);
    };

    return (
        <SelectInputWrapper>
            <TextWithIcon>
                <GreyTextRegular
                    as="h3"
                    size={TextSize.MEDIUM}
                >Okamžitá rezervace
                </GreyTextRegular>
                <Image
                    src='/action.svg'
                    alt='passengers-count'
                    width="16"
                    height="16"

                />
            </TextWithIcon>
            <ThemeProvider theme={theme}>
                <FormControl sx={{
                    width: 176,
                    marginTop: 2,
                    borderColor: "secondary",
                }}>
                    <Select
                        labelId="instant-reservation-label"
                        id="instant-reservation"
                        value={status}
                        onChange={handleChange}
                        inputProps={{
                            sx: {
                                "&.MuiOutlinedInput-input": {
                                    border: "1px solid var(--color-beige)"
                                },

                                "&.MuiOutlinedInput-input:hover": {
                                    border: "1px solid var(--color-green)",
                                }
                            }
                        }}
                    >
                        <MenuItem
                            value={true}>Ano</MenuItem>
                        <MenuItem value={false}>Ne</MenuItem>
                    </Select>
                </FormControl>
            </ThemeProvider>
        </SelectInputWrapper>
    )
};

export default SelectInput;

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 16px;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;
