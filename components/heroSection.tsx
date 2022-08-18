import styled from 'styled-components'

const HeroImageSection = styled.section`
    height: 426px;
    margin: 5px;
    flex-basis: 100%;
    background-image: url('/crossfit-oddity/images/back-of-gym-hero.jpg');
    background-position: 10px;
    margin: 0;
    color: white;
`;

const HeroMask = styled.div`
    background-color:rgba(0, 0, 0, 0.6);
    width:100%;
    height: 100%;
    font-size: 50px;
    margin: auto;
    display: flex;
    flex-flow: row;
    justify-content: center;

`;

const HeroHeading = styled.span`
    margin: auto;
    word-spacing: 20px;
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