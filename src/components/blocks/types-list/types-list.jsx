import React, {useState} from 'react';
import TypeCard from "../../ui/type-card/type-card";
import { TypesListStyled, TypesListWrapper } from "./styles";
import {filters} from "../../../const";
import {GreyTextRegular, TextSize} from "../../ui/text/text"

const TypesList = () => {
    const state = {
        activeFilter: [],
    }

    const [activeFilter, setActiveFilter] = useState([filters[0]]);


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
                        />
                    )
                }
            </TypesListStyled>
        </TypesListWrapper>
    );
};

export default TypesList;