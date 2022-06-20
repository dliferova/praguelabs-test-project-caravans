import React from 'react';
import styled from "styled-components";
import TypesList from "../types-list/types-list";
import SelectInput from "../../ui/select/select";
import RangeSlider from "../../ui/range/range-template";

const FiltersParameters = () => {
    return (
        <FiltersWrapper>
            <FilterItem>
                <RangeSlider/>
            </FilterItem>
            <FilterItem>
                <TypesList/>
            </FilterItem>
            <FilterItem>
                <SelectInput/>
            </FilterItem>
        </FiltersWrapper>
    );
};

export default FiltersParameters;

const FiltersWrapper = styled.section`
  display: grid;
  align-items: stretch;
  grid-template-columns: max-content 3fr max-content;
  margin-bottom: 40px;
`;

const FilterItem = styled.div`
  display: flex;
  padding: 20px 10px;

  border: 1px solid #EDEAE3;
  border-left: none;
  
  &:last-of-type {
    border-right: none;
  }
`;