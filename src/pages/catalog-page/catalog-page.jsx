import React from 'react';
import CaravansList from "../../components/blocks/caravans-list/caravans-list";
import FiltersParameters from "../../components/blocks/filters-parametres/filters-parameters";
import {PageWrapper} from "../../default-styles";

const CatalogPage = () => {
    return (
        <>
            <h1 className="visually-hidden">Caravans Catalog Page</h1>
            <FiltersParameters/>
            <PageWrapper>
                <CaravansList/>
            </PageWrapper>
        </>
    );
};

export default CatalogPage;