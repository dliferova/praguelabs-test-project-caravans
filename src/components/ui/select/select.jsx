import React from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';
import styled from "styled-components";
import Image from 'next/image';
import {GreyTextRegular, TextSize, TextWithIcon} from "../text/text";

const SelectInput = ({ updatedSelect }) => {
    const [status, setStatus] = React.useState('true');

    const onSelectUpdate = (selectedItem) => {
        updatedSelect(selectedItem)
    }

    const handleChange = (event) => {
        setStatus(event.target.value);
        onSelectUpdate(event.target.value);
        console.log(event.target.value);
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
            <FormControl sx={{
                width: 176,
                marginTop: 2,
            }}>
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
  padding: 0 0 0 16px;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;
