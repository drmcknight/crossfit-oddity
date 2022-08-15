import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo';
import { Menu } from './menu';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
`;
const PhoneNumber = styled.a`
    display: inline-block;
    line-height: 60px;
    font-size: large;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    &:visited {
        color: black;
    }
`;


export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <PhoneNumber href="tel:(256)924-5726">(256) 924-5726</PhoneNumber>
            <Menu />
        </HeaderWrapper>
    )
}

