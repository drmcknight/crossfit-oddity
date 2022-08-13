import styled from 'styled-components'

const FullWidthSection = styled.section`
    max-height: 550px;
    margin: 5px;
    flex-basis: 100%;
    background-color: #f4f4f4;
    margin: 0;
`;

const ItemHeader = styled.h2`
    font-weight: 800;
    text-transform: uppercase;
    font-family: Oswald;
    text-align: center;
`;

const ItemList = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const Item = styled.summary`
    flex-basis: 33%;
    @media (max-width: 768px) {
        flex-basis: 100%;
      }
    padding: 0px 25px;
`;

const ItemDescription = styled.p`
`;


export const OurProgramsSection = () => {
    return (
        <FullWidthSection>
            <ItemList>
                <Item>
                    <ItemHeader>CrossFit Group Training</ItemHeader>
                    <ItemDescription>Execute a diverse set of workouts within a group setting. Each session is led by a coach that will warm you up, teach you how to perform the moves, and help you scale the exercise to your fitness level. You must complete our Foundations course before jumping into a group sessions.</ItemDescription>
                </Item>
                <Item>
                    <ItemHeader>Barbell Club</ItemHeader>
                    <ItemDescription>Work on olympic weightlifting in 8 week blocks with a trained coach.</ItemDescription>
                </Item>
                <Item>
                    <ItemHeader>Yoga Classes</ItemHeader>
                    <ItemDescription>Improve mental and physical fitness with our twice-per-week yoga classes. These classes are included in your membership and will be led by a coach.</ItemDescription>
                </Item>
            </ItemList>
        </FullWidthSection>
    );
}