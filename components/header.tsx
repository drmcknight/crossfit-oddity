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
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <Menu />
        </HeaderWrapper>
    )
}

