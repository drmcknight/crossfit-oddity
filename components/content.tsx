import styled from 'styled-components'

const Main = styled.main`
    background-color: grey;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding 5px;
`;

const ContentItem = styled.section`
    width: 450px;
    max-height: 250px;
    background-color: red;
    margin: 5px;
    flex-grow: 1;
`;
const FullWidthContentItem = styled.section`
    width: 450px;
    max-height: 250px;
    background-color: red;
    margin: 5px;
    flex-grow: 6;
`;


export const Content = () => {
    return (
        <Main>
            <FullWidthContentItem>
                What do we offer?
                CrossFit, Yoga, Barbell Club, Fitness Coaching
            </FullWidthContentItem>
            <ContentItem>
            Our Mission:  Take “ordinary people and give them extraordinary results”.  By focusing all of our energy, effort and finances  on our mission, the result is an amazing gym, talented Coaches and a fantastic, welcoming community of members exceeding their fitness goals.
            </ContentItem>
            <ContentItem>
                CTA
                $0.00 Initiation Fee
                Become a Member
            </ContentItem>
            <ContentItem>
                Brain-dead easy contact
            </ContentItem>
            <ContentItem>
                Getting Started. What will my experience be like? First day? First week? First month?
            </ContentItem>
            <ContentItem>
                How to find us
            </ContentItem>
            <ContentItem>
                What happens here?
            </ContentItem>
        </Main>
    );
}