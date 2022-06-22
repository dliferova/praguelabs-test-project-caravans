import React, {useEffect, useState} from 'react';
import CaravansList from "../../components/blocks/caravans-list/caravans-list";
import FiltersParameters from "../../components/blocks/filters-parametres/filters-parameters";
import {PageWrapper} from "../../default-styles";

const CatalogPage = () => {
    const [productsData, setProductsData] = useState([]);
    const [products, setProductsList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/data')
            .then((response) => {
                response.json().then(json => {
                    const copy = [...json.items]
                    setProductsData(copy)
                })
            })
    }, []);

    useEffect( () => {
        setProductsList(productsData)
    }, [productsData])

    const onFilterChange = (filters) => {
        const filteredList = productsData
            .filter(item => filters.priceRange[0] <= item.price && filters.priceRange[1] >= item.price)
            .filter(item => filters.activeFilters.length === 0 || filters.activeFilters.includes(item.vehicleType))
            .filter(item => item.instantBookable === filters.isInstantBookable)
            .sort((productA, productB) => productA.price - productB.price)

        setProductsList(filteredList);
    }

    return (
        <>
            <h1 className="visually-hidden">Caravans Catalog Page</h1>
            <FiltersParameters onFilterChange={onFilterChange} />
            <PageWrapper>
                {products && <CaravansList products={products}/>}
            </PageWrapper>
        </>
    );
};

export default CatalogPage;
