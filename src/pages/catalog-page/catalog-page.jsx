import React, {useEffect, useState} from 'react';
import CaravansList from "../../components/blocks/caravans-list/caravans-list";
import FiltersParameters from "../../components/blocks/filters-parametres/filters-parameters";
import {PageWrapper} from "../../default-styles";

const CatalogPage = () => {
    const [productsData, setProductsData] = useState([]);
    const [products, setProductsList] = useState([]);
    const [filterObject, setFilter] = useState({
            priceRange: [1200, 7600],
            activeFilters: [],
            isInstantBookable: true
    });

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

    useEffect( () => {
        const filteredList = productsData
            .filter(item => filterObject.priceRange[0] <= item.price && filterObject.priceRange[1] >= item.price)
            .filter(item => filterObject.activeFilters.length === 0 || filterObject.activeFilters.includes(item.vehicleType))
            .filter(item => item.instantBookable === filterObject.isInstantBookable)
            .sort((productA, productB) => productA.price - productB.price)

        setProductsList(filteredList);

    }, [filterObject])

    const handlerPriceValue = (priceValue) => {
        setFilter((prevState) => ({
            ...prevState,
            priceRange: priceValue
        }))
    }

    const handlerTypeChange = (activeFilters) => {
        setFilter((prevState) => ({
            ...prevState,
            activeFilters: activeFilters
        }))
    }

    const handlerSelectChange = (selectedItem) => {
        setFilter((prevState) => ({
            ...prevState,
            isInstantBookable: selectedItem
        }))
    }

    return (
        <>
            <h1 className="visually-hidden">Caravans Catalog Page</h1>
            <FiltersParameters
                updatedPriceValue={handlerPriceValue}
                updatedTypeData={handlerTypeChange}
                updatedSelect={handlerSelectChange}
            />
            <PageWrapper>
                {products && <CaravansList products={products}/>}
            </PageWrapper>
        </>
    );
};

export default CatalogPage;
