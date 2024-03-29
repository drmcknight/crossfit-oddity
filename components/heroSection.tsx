import styled from 'styled-components'
import { Header } from './header';

const HeroImageSection = styled.section`
    height: 670px;
    flex-basis: 100%;
    background-image: url('/crossfit-oddity/images/oddity-christmas.jpg');
    background-position: center -300px;
    background-repeat: no-repeat;
    background-size: auto auto;
    margin: 0;
    color: white;
    @media (max-width: 768px) {
        height: 720px;
        flex-basis: 100%;
    }
`;

const HeroMask = styled.div`
    background-color:rgba(0, 0, 0, 0.6);
    width:100%;
    height: 100%;
    margin: auto;
`;

const HeroHeading = styled.h1`
    word-spacing: 20px;
    font-size: 100px;
    padding: 25px 25px 0 25px;
    margin: 100px 0 0 0;
    width: 420px;
    @media (max-width: 768px) {
        font-size: 70px;
        width: unset;
        margin: 200px 0 0 0;
    }
`;

const HeroDescription = styled.ul`
    width: 400px;
    margin: 0 0 0 40px;
    padding: 0 25px 25px 25px;
    font-size: x-large;
    list-style: disclosure-closed;
    @media (max-width: 768px) {
        width: unset;
        flex-basis: 100%;
    }
`;

const CTAButton = styled.a`
    display: inline-block;
    padding: 10px;
    margin-left: 25px;
    background-color: #7cda24;
    color: white;
    cursor: pointer;
    margin-right: 15px;
    font-size: x-large;
    &:hover {
        color: white;
    }
    &:visited {
        color: white;
    }
`;


export const HeroSection = () => {
    return (
        <HeroImageSection>
            <HeroMask>
                <Header isHomepage={true} />            
                <HeroHeading>
                    Oddity Athletics
                </HeroHeading>
                <HeroDescription>
                    <li>Engaging Programs</li>
                    <li>Air Conditioning</li>
                    <li>24hr Access</li>
                </HeroDescription>
                <CTAButton href="#cta">Let's get started!</CTAButton>
            </HeroMask>
        </HeroImageSection>
    );
}