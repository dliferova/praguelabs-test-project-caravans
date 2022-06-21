import React, {memo} from 'react';
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

const ProductCard = ({props}) => {
    return (
        <ProductCardWrapper>
            <ProductCardStyled>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image
                        src='https://d35xwkx70uaomf.cloudfront.net/017bc56a-8387-4b2c-b044-a01a0b7ddf1b.jpg'
                        alt='Caravan Forster A 699 HB'
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
                            >Integrál
                            </TextAccent>
                            <TextBoldHeading
                                as="h2"
                                size={TextSize.BIG}
                                fontWeight={'bold'}
                            >Forster A 699 HB
                            </TextBoldHeading>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <div className="product-card__conveniences">
                            <Text
                                marginBottom={'10px'}
                            >Prachov
                            </Text>
                            <CardIconsGroup>
                                <GroupItem>
                                    <Image
                                        src='/passengers-count-icon.svg'
                                        alt='passengers-count'
                                        width="20"
                                        height="20"
                                    />
                                    <Counter>7</Counter>
                                </GroupItem>
                                <GroupItem>
                                    <Image
                                        src='/bed-icon.svg'
                                        alt='sleep-capacity'
                                        width="20"
                                        height="20"
                                    />
                                    <Counter>4</Counter>
                                </GroupItem>
                                <GroupItem>
                                    <Image
                                        src='/wc-icon.svg'
                                        alt='wc-info'
                                        width="20"
                                        height="20"
                                    />
                                </GroupItem>
                                <GroupItem>
                                    <Image
                                        src='/shower-icon.svg'
                                        alt='shower-info'
                                        width="20"
                                        height="20"
                                    />
                                </GroupItem>
                            </CardIconsGroup>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <PriceWrapper>
                            <GreyTextRegular>Cena od</GreyTextRegular>
                            <TextWithIcon>
                                <PriceInfo>2 750 &#75;&#269; &#47;&nbsp;den</PriceInfo>
                                <Image
                                    src='/action.svg'
                                    alt='passengers-count'
                                    width="16"
                                    height="16"
                                />
                            </TextWithIcon>
                        </PriceWrapper>
                    </ProductCardContentContainer>
                </ProductCardInfoWrap>
            </ProductCardStyled>
        </ProductCardWrapper>
    );
};

export default ProductCard;