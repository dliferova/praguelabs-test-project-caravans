import React, {useState} from 'react';
import TypesList from "../types-list/types-list";
import SelectInput from "../../ui/select/select";
import RangeSlider from "../../ui/range/range-template";
import { DecoratedSection, FiltersWrapper, FilterItem } from "./styles";
import { PageWrapper } from "../../../default-styles";

const FiltersParameters = ({ updatedPriceValue, updatedTypeData, updatedSelect }) => {
    return (
        <DecoratedSection>
            <PageWrapper>
                <FiltersWrapper>
                    <FilterItem>
                        <RangeSlider updatedPriceValue={updatedPriceValue} />
                    </FilterItem>
                    <FilterItem>
                        <TypesList updatedTypeData={updatedTypeData} />
                    </FilterItem>
                    <FilterItem>
                        <SelectInput updatedSelect={updatedSelect} />
                    </FilterItem>
                </FiltersWrapper>
            </PageWrapper>
        </DecoratedSection>
    );
};

export default FiltersParameters;