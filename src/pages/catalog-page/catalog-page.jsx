import React from 'react';
import CaravansList from "../../components/blocks/caravans-list/caravans-list";
import FiltersParameters from "../../components/blocks/filters-parametres/filters-parameters";

const CatalogPage = () => {
    return (
        <>
            <FiltersParameters/>
            <CaravansList/>
        </>
    );
};

export default CatalogPage;