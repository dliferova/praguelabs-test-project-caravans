import React from 'react';
import {filters} from "../../../const";
import {
    ProductCardWrapper,
    ProductCardStyled,
    ProductCardImgWrap,
    ProductCardInfoWrap,
    ProductCardContentContainer,
    Counter,
    CardIconsGroup,
    PriceWrapper,
    GroupItem,
    PriceInfo,
} from "./styles";
import {Text, TextSize, TextBoldHeading, GreyTextRegular, TextAccent, TextWithIcon} from "../text/text";
import Image from 'next/image';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VehicleCard = ({vehicle}) => {

    const formattedVehicle = (filters, product) => {
        return filters.find(filter => filter.id === product.vehicleType).type
    }

    const formattedVehicleType = formattedVehicle(filters, vehicle);

    return (
        <ProductCardWrapper>
            <ProductCardStyled>
                <ProductCardImgWrap>
                    <Carousel showArrows={true}>
                        {
                            vehicle.pictures
                                .map((item, index) =>
                                    <div key={vehicle.name + 'image_' + index}>
                                        <Image
                                            className="card-img"
                                            src={item}
                                            alt={vehicle.name}
                                            width="390"
                                            height="193"
                                            objectFit="cover"
                                            quality="75"
                                        />
                                    </div>
                                )
                        }
                    </Carousel>
                </ProductCardImgWrap>
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
                            >{vehicle.name}
                            </TextBoldHeading>
                        </div>
                    </ProductCardContentContainer>
                    <ProductCardContentContainer>
                        <div className="product-card__conveniences">
                            <Text
                                marginBottom={'10px'}
                            >{vehicle.location}
                            </Text>
                            <CardIconsGroup>
                                <GroupItem>
                                    <Image
                                        src='/passengers-count-icon.svg'
                                        alt='passengers-count'
                                        width="20"
                                        height="20"
                                    />
                                    <Counter>{vehicle.passengersCapacity}</Counter>
                                </GroupItem>
                                <GroupItem>
                                    <Image
                                        src='/bed-icon.svg'
                                        alt='sleep-capacity'
                                        width="20"
                                        height="20"
                                    />
                                    <Counter>{vehicle.sleepCapacity}</Counter>
                                </GroupItem>
                                {vehicle.toilet ?
                                    <GroupItem>
                                        <Image
                                            src='/wc-icon.svg'
                                            alt='wc-info'
                                            width="20"
                                            height="20"
                                        />
                                    </GroupItem> : null
                                }
                                {vehicle.shower ?
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
                                <PriceInfo>{vehicle.price} &#75;&#269; &#47;&nbsp;den</PriceInfo>
                                {vehicle.instantBookable ?
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

export default VehicleCard;