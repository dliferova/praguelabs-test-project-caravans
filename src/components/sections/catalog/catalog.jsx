import React, {useEffect, useState} from 'react';
import VehiclesList from "../../blocks/vehicles-list/vehicles-list";
import FiltersParameters from "../../blocks/filters-parametres/filters-parameters";
import {PageWrapper} from "../../../theme-styles";

const Catalog = () => {
    const [productsData, setProductsData] = useState([]);
    const [vehicles, setVehiclesList] = useState([]);

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
        setVehiclesList(productsData)
    }, [productsData])

    const onFilterChange = (filters) => {
        const filteredList = productsData
            .filter(item => filters.priceRange[0] <= item.price && filters.priceRange[1] >= item.price)
            .filter(item => filters.activeFilters.length === 0 || filters.activeFilters.includes(item.vehicleType))
            .filter(item => item.instantBookable === filters.isInstantBookable)
            .sort((productA, productB) => productA.price - productB.price)

        setVehiclesList(filteredList);
    }

    return (
        <>
            <h1 className="visually-hidden">Caravans Catalog Page</h1>
            <FiltersParameters onFilterChange={onFilterChange} />
            <PageWrapper>
                {vehicles && <VehiclesList vehicles={vehicles}/>}
            </PageWrapper>
        </>
    );
};

export default Catalog;
