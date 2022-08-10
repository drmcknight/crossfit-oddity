import styled from 'styled-components'
import { CTASection, GettingStartedSection, LocationSection, OurMissionSection, OurProgramsSection } from '../components';

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding 5px;
`;

export const Content = () => {
    return (
        <Main>
            <OurProgramsSection />
            <OurMissionSection />
            <CTASection />
            <GettingStartedSection />
            <LocationSection />
        </Main>
    );
}