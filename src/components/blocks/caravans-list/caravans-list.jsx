import React from "react";
import ProductCard from "../../ui/product-card/product-card";
import {SectionContainer, CaravansListWrapper, ShowMoreButton} from "./styles";

function CaravansList({}) {
    return (
        <SectionContainer>
            <CaravansListWrapper>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </CaravansListWrapper>

            <ShowMoreButton
                type="button"
            >
                Načíst další
            </ShowMoreButton>
        </SectionContainer>
    )}


// function CaravansList({ caravans }) {
//     return caravans && caravans.length ? (
//         <ProductCard/>
//     ) : <div>We are sorry, but there is no caravans yet.</div>;
// }

export default CaravansList;