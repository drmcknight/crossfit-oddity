import styled from 'styled-components'
import Image from 'next/image';

const HeroImageSection = styled.section`
    height: 421px;
    margin: 5px;
    flex-basis: 100%;
    background-image: url('/images/oddity-gym.jpg');
    margin: 0;
`;

const HeroHeading = styled.div`
    background-color:rgba(0, 0, 0, 0.6);
    width:100%;
    height: 100%;
    color: white;
    padding: 40px;
`;

const HeroDescription = styled.p`
    width: 800px;
    margin: 250px auto;

`;


export const HeroSection = () => {
    return (
        <HeroImageSection>
            <HeroHeading>
                <HeroDescription>
                    At Oddity we focus all our energy, effort, and finances on our mission- to take ordinary people and give them extraordinary results. The result is an amazing gym, talented coaches and a fantastic, welcoming community of members exceeding their fitness goals.
                    So whether you're a seasoned CrossFit veteran or just getting started, Oddity is where it's at.
                </HeroDescription>
            </HeroHeading>
        </HeroImageSection>
    );
}