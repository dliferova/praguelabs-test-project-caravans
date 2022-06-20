import React from 'react';
import { StyledSection } from "./styles";
import Logo from "../../ui/logo/logo";

const Header = () => {
    return (
        <StyledSection as="header">
            <Logo/>
            <div>
                HEADER
            </div>
        </StyledSection>
    );
};

export default Header;