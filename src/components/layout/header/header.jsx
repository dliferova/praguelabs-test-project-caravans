import React from 'react';
import Logo from "../../ui/logo/logo";
import { StyledSection } from "./styles";
import { PageWrapper } from "../../../theme-styles";

const Header = () => {
    return (
        <PageWrapper>
            <StyledSection as="header">
                <Logo/>
            </StyledSection>
        </PageWrapper>
    );
};

export default Header;