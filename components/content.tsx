import styled from 'styled-components'
import { CTASection, GettingStartedSection, HeroSection, LocationSection, MembershipsSection, OurProgramsSection } from '../components';

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding 0;
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Content = () => {
    return (
        <Main>
            <HeroSection />
            <OurProgramsSection />
            <MembershipsSection />
            <CTASection />
            <GettingStartedSection />
            <LocationSection />
        </Main>
    );
}