import React from 'react';
import TypeCard from "../../ui/type-card/type-card";
import { TypesListStyled, TypesListWrapper } from "./styles";
import { HeadingH3 } from "../../../default-styles";
import {filters} from "../../../const";

const TypesList = () => {
    return (
        <TypesListWrapper>
            <HeadingH3>Typ karavanu</HeadingH3>
            <TypesListStyled>
                {
                    filters.map((filter) =>
                        <TypeCard key={filter.id} typ={filter.type} description={filter.description}/>
                    )
                }
            </TypesListStyled>
        </TypesListWrapper>
    );
};

export default TypesList;