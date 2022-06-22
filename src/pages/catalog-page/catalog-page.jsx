import React, {useEffect, useState} from 'react';
import CaravansList from "../../components/blocks/caravans-list/caravans-list";
import FiltersParameters from "../../components/blocks/filters-parametres/filters-parameters";
import {PageWrapper} from "../../default-styles";

const CatalogPage = () => {
    // const state = {
    //     products: products,
    //     priceRange: [1200, 7600],
    //     activeFilters: [''],
    //     isInstantBookable: true,
    // }

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


    const handlerTypeChange = (activeFilters) => {
        if (activeFilters.length > 0) {
            const filteredProducts = productsData
                .filter(item => activeFilters.includes(item.vehicleType));
            setProductsList(filteredProducts);
        } else {
            setProductsList(productsData);
        }
    }

    return (
        <>
            <h1 className="visually-hidden">Caravans Catalog Page</h1>
            <FiltersParameters updatedTypeData={handlerTypeChange}/>
            <PageWrapper>
                {products && <CaravansList products={products}/>}
            </PageWrapper>
        </>
    );
};

export default CatalogPage;
