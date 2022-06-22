import React, {useEffect} from 'react';
import CaravansList from "../../components/blocks/caravans-list/caravans-list";
import FiltersParameters from "../../components/blocks/filters-parametres/filters-parameters";
import {PageWrapper} from "../../default-styles";

const CatalogPage = () => {
    const [products, setProductsList] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/data')
            .then((response) => {
                response.json().then(json => {
                    const copy = [...json.items]
                    setProductsList(copy)
                })
            })
    }, []);

    return (
        <>
            <h1 className="visually-hidden">Caravans Catalog Page</h1>
            <FiltersParameters />
            <PageWrapper>
                {products && <CaravansList products={products}/>}
            </PageWrapper>
        </>
    );
};

export default CatalogPage;