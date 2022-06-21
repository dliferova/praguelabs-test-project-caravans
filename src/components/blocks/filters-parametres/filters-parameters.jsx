import React from 'react';
import TypesList from "../types-list/types-list";
import SelectInput from "../../ui/select/select";
import RangeSlider from "../../ui/range/range-template";
import { DecoratedSection, FiltersWrapper, FilterItem } from "./styles";
import { PageWrapper } from "../../../default-styles";

const FiltersParameters = () => {
    return (
        <DecoratedSection>
            <PageWrapper>
                <FiltersWrapper>
                    <FilterItem>
                        <RangeSlider />
                    </FilterItem>
                    <FilterItem>
                        <TypesList />
                    </FilterItem>
                    <FilterItem>
                        <SelectInput />
                    </FilterItem>
                </FiltersWrapper>
            </PageWrapper>
        </DecoratedSection>
    );
};

export default FiltersParameters;