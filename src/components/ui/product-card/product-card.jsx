import React, {memo} from 'react';
import {ProductCardWrapper,
    ProductCardStyled,
    ProductCardImageWrap,
    ProductCardInfoWrap,
    ProductCardContentContainer,
    HeadingH2,
    TextAccent,
    CardIconsGroup,
    StyledIcon,
    PriceWrapper,
    PriceInfo
} from "./styles";


const ProductCard = ({ props }) => {
   //const {previewImage, price} = props;

    return (
        <ProductCardWrapper>
            <ProductCardStyled>
                <ProductCardImageWrap>
                    <a href="#">
                        <img src="" alt="Caravan image"/>
                    </a>
                </ProductCardImageWrap>
                <ProductCardInfoWrap>
                    <ProductCardContentContainer>
                        <div>
                            <TextAccent>Integrál</TextAccent>
                            <HeadingH2>Forster A 699 HB</HeadingH2>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <div className="product-card__conveniences">
                            <p>Prachov</p>
                            <CardIconsGroup>
                                <StyledIcon/>
                            </CardIconsGroup>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <PriceWrapper>
                            <PriceInfo>Cena od</PriceInfo>
                            <PriceInfo>2 750 &#75;&#269; &#47;&nbsp;den</PriceInfo>
                        </PriceWrapper>
                    </ProductCardContentContainer>
                </ProductCardInfoWrap>
            </ProductCardStyled>
        </ProductCardWrapper>
    );
};

export default ProductCard;