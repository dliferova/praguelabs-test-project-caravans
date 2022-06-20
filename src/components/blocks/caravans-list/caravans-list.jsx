import React from "react";
import ProductCard from "../../ui/product-card/product-card";
import {CaravansListWrapper} from "./styles";
import Button from "../../ui/button/button";

function CaravansList({}) {
    return (
        <CaravansListWrapper>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <Button
                type="button"
            >
                Nacist dalsi
            </Button>
        </CaravansListWrapper>
    )}


// function CaravansList({ caravans }) {
//     return caravans && caravans.length ? (
//         <ProductCard/>
//     ) : <div>We are sorry, but there is no caravans yet.</div>;
// }

export default CaravansList;