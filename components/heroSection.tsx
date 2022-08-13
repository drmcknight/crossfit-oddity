import styled from 'styled-components'
import Image from 'next/image';

const HeroImageSection = styled.section`
    height: 426px;
    margin: 5px;
    flex-basis: 100%;
    background-image: url('/images/oddity-gym.jpg');
    margin: 0;
    color: white;
`;

const HeroMask = styled.div`
    background-color:rgba(0, 0, 0, 0.6);
    width:100%;
    height: 100%;
    font-size: 70px;
    margin: auto;
    display: flex;
    flex-flow: row;
    justify-content: center;

`;

const HeroHeading = styled.span`
    margin: auto;
`;


export const HeroSection = () => {
    return (
        <HeroImageSection>
            <HeroMask>
                <HeroHeading>
                    Bigger. Faster. Stronger.
                </HeroHeading>
            </HeroMask>
        </HeroImageSection>
    );
}