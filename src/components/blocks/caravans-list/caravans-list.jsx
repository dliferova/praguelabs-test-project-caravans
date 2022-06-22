import React from "react";
import ProductCard from "../../ui/product-card/product-card";
import {SectionContainer, CaravansListWrapper, ShowMoreButton} from "./styles";

const MIN_COUNT_ITEMS = 6;

function CaravansList({products}) {
    return (
        <SectionContainer>
            <CaravansListWrapper>
                {products.map((product, index) =>
                    <ProductCard
                        key={index}
                        product={product}
                    />
                )}
            </CaravansListWrapper>

            {products.length > MIN_COUNT_ITEMS ?
                <ShowMoreButton
                    type="button"
                >
                    Načíst další
                </ShowMoreButton> : null
            }


        </SectionContainer>
    )
}

export default CaravansList;