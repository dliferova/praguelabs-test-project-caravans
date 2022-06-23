import React, {memo} from 'react';
import {filters} from "../../../const";
import {
    ProductCardWrapper,
    ProductCardStyled,
    ProductCardInfoWrap,
    ProductCardContentContainer,
    Counter,
    CardIconsGroup,
    PriceWrapper,
    GroupItem,
    PriceInfo,
} from "./styles";
import {
    Text,
    TextSize,
    TextBoldHeading,
    GreyTextRegular,
    TextAccent,
    TextWithIcon
} from "../text/text";
import Image from 'next/image';

const ProductCard = ({ product }) => {

    const formattedVehicleTypeF = (filters, product) => {
        return filters
            .filter(filter => filter.id === product.vehicleType)[0].type
    }

    const formattedVehicleType = formattedVehicleTypeF(filters, product)


    return (
        <ProductCardWrapper>
            <ProductCardStyled>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image
                        src={product.pictures[0]}
                        alt={product.name}
                        width="390"
                        height="193"
                        objectFit="cover"
                        quality="75"
                    />
                </div>
                <ProductCardInfoWrap>
                    <ProductCardContentContainer>
                        <div>
                            <TextAccent
                                size={TextSize.EXTRA_SMALL}
                                marginBottom={'10px'}
                            >{formattedVehicleType}
                            </TextAccent>
                            <TextBoldHeading
                                as="h2"
                                size={TextSize.BIG}
                                fontWeight={'bold'}
                            >{product.name}
                            </TextBoldHeading>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <div className="product-card__conveniences">
                            <Text
                                marginBottom={'10px'}
                            >{product.location}
                            </Text>
                            <CardIconsGroup>
                                <GroupItem>
                                    <Image
                                        src='/passengers-count-icon.svg'
                                        alt='passengers-count'
                                        width="20"
                                        height="20"
                                    />
                                    <Counter>{product.passengersCapacity}</Counter>
                                </GroupItem>
                                <GroupItem>
                                    <Image
                                        src='/bed-icon.svg'
                                        alt='sleep-capacity'
                                        width="20"
                                        height="20"
                                    />
                                    <Counter>{product.sleepCapacity}</Counter>
                                </GroupItem>
                                {product.toilet ?
                                    <GroupItem>
                                        <Image
                                            src='/wc-icon.svg'
                                            alt='wc-info'
                                            width="20"
                                            height="20"
                                        />
                                    </GroupItem> : null
                                }
                                {product.shower ?
                                    <GroupItem>
                                        <Image
                                            src='/shower-icon.svg'
                                            alt='shower-info'
                                            width="20"
                                            height="20"
                                        />
                                    </GroupItem> : null
                                }
                            </CardIconsGroup>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <PriceWrapper>
                            <GreyTextRegular>Cena od</GreyTextRegular>
                            <TextWithIcon>
                                <PriceInfo>{product.price} &#75;&#269; &#47;&nbsp;den</PriceInfo>
                                {product.instantBookable ?
                                    <Image
                                        src='/action.svg'
                                        alt='passengers-count'
                                        width="16"
                                        height="16"
                                    /> : null}
                            </TextWithIcon>
                        </PriceWrapper>
                    </ProductCardContentContainer>
                </ProductCardInfoWrap>
            </ProductCardStyled>
        </ProductCardWrapper>
    );
};

export default ProductCard;