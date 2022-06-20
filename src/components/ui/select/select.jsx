import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import styled from "styled-components";

const SelectInput = () => {
    const [status, setStatus] = React.useState('true');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <SelectInputWrapper>
            <TitleSmall>Okamžità rezervace</TitleSmall>
            <FormControl sx={{ m: 1, width: 156 }}>
                <Select
                    labelId="instant-reservation-label"
                    id="instant-reservation"
                    value={status}
                    onChange={handleChange}
                >
                    <MenuItem value={true}>Ano</MenuItem>
                    <MenuItem value={false}>Ne</MenuItem>
                </Select>
            </FormControl>
        </SelectInputWrapper>
    )
};

export default SelectInput;

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleSmall = styled.h4`
  font-size: 16px;
  line-height: 100%;
  color: var(--color-dark-grey);
  font-weight: normal;
`;