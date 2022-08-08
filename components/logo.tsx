import styled from 'styled-components';
import Image from 'next/image';

const LogoWrapper = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: row;
`;

const LogoText = styled.span`
    display: inline-block;
    line-height: 60px;
    font-size: large;
    font-weight: bold;
    text-transform: uppercase;

`;

export const Logo = () => {
    return (
        <LogoWrapper>
        <Image
            src="/images/oddity.png"
            height="60px"
            width="60px"
            alt="logo"
        />
        <LogoText>
            CrossFitOddity
        </LogoText>
    </LogoWrapper>
    )
}