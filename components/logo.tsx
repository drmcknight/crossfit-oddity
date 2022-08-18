import styled from 'styled-components';
import Image from 'next/image';

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const LogoLink = styled.a`
    display: inline-block;
    line-height: 60px;
    font-size: large;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: black;
    }
    &:visited {
        color: black;
    }

`;

export const Logo = () => {
    return (
        <LogoWrapper>
        <Image
            src="/crossfit-oddity/images/oddity.png"
            height="60px"
            width="60px"
            alt="logo"
        />
        <LogoLink href="/crossfit-oddity">
            CrossFitOddity
        </LogoLink>
    </LogoWrapper>
    )
}