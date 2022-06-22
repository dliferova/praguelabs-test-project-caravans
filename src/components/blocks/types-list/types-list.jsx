import React, {useState} from 'react';
import TypeCard from "../../ui/type-card/type-card";
import { TypesListStyled, TypesListWrapper } from "./styles";
import {filters} from "../../../const";
import {GreyTextRegular, TextSize} from "../../ui/text/text"

const TypesList = ({}) => {
    const [activeFilter, setActiveFilter] = useState([]);

    const handleClick = (filterId) => {
        const isActive = activeFilter.find(filter => filter === filterId)
        let newArray;
        if (!isActive) {
            newArray = activeFilter.concat([filterId])
        } else {
            newArray = activeFilter.filter(filter => filter !== filterId)
        }
        setActiveFilter(newArray)
    }

    return (
        <TypesListWrapper>
            <GreyTextRegular
                as="h3"
                size={TextSize.MEDIUM}
                marginBottom={'16px'}
            >Typ karavanu
            </GreyTextRegular>
            <TypesListStyled>
                {
                    filters.map((filter) =>
                        <TypeCard
                            key={filter.id}
                            typ={filter.type}
                            description={filter.description}
                            isActive={activeFilter.find(item => item === filter.id)}
                            onClick={() => handleClick(filter.id)}
                        />
                    )
                }
            </TypesListStyled>
        </TypesListWrapper>
    );
};

export default TypesList;