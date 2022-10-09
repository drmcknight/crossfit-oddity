import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo';
import { Menu } from './menu';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const PhoneNumber = styled.a`
    line-height: 60px;
    font-size: large;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    &:visited {
        color: black;
    }
`;


export const Header = ({isHomepage}) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Menu linkColor={ isHomepage ? 'white' : 'black'} />
        </HeaderWrapper>
    )
}

