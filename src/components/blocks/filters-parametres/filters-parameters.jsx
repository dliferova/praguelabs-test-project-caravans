import React, {useEffect, useState} from 'react';
import TypesList from "../types-list/types-list";
import SelectInput from "../../ui/select/select";
import RangeSlider from "../../ui/range/range-template";
import {DecoratedSection, FiltersWrapper, FilterItem} from "./styles";
import {PageWrapper} from "../../../default-styles";

const FiltersParameters = ({ onFilterChange }) => {
    const [filterObject, setFilter] = useState({
        priceRange: [1200, 7600],
        activeFilters: [],
        isInstantBookable: true
    });

    useEffect(() => {
        onFilterChange(filterObject)
    }, [filterObject])

    const handlePriceValue = (priceValue) => {
        setFilter((prevState) => ({
            ...prevState,
            priceRange: priceValue
        }))
    }

    const handleTypeChange = (activeFilters) => {
        setFilter((prevState) => ({
            ...prevState,
            activeFilters: activeFilters
        }))
    }

    const handleSelectChange = (selectedItem) => {
        setFilter((prevState) => ({
            ...prevState,
            isInstantBookable: selectedItem
        }))
    }

    return (
        <DecoratedSection>
            <PageWrapper>
                <FiltersWrapper>
                    <FilterItem>
                        <RangeSlider onPriceUpdate={handlePriceValue}/>
                    </FilterItem>
                    <FilterItem>
                        <TypesList onTypeUpdate={handleTypeChange}/>
                    </FilterItem>
                    <FilterItem>
                        <SelectInput onSelectUpdate={handleSelectChange}/>
                    </FilterItem>
                </FiltersWrapper>
            </PageWrapper>
        </DecoratedSection>
    );
};

export default FiltersParameters;