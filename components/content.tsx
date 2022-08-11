import styled from 'styled-components'
import { CTASection, GettingStartedSection, HeroSection, LocationSection, MembershipsSection, OurProgramsSection } from '../components';

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding 5px;
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