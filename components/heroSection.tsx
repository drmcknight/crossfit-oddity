import styled from 'styled-components'
import { Header } from './header';

const HeroImageSection = styled.section`
    height: 615px;
    margin: 5px;
    flex-basis: 100%;
    background-image: url('https://via.placeholder.com/1500x625.webp');
    background-position: 10px;
    margin: 0;
    color: white;
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
`;

const HeroDescription = styled.p`
    width: 400px;
    margin: 0;
    padding: 0 25px 25px 25px;
`;

const CTAButton = styled.a`
    display: inline-block;
    padding: 10px;
    margin-left: 25px;
    background-color: #7cda24;
    color: white;
    cursor: pointer;
    margin-right: 15px;
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
                <Header />            
                <HeroHeading>
                    Oddity Athletics
                </HeroHeading>
                <HeroDescription>Whether you are new to CrossFit or have experience and are new to Oddity this is the place to start.</HeroDescription>
                <CTAButton href="">Read more</CTAButton>
            </HeroMask>
        </HeroImageSection>
    );
}