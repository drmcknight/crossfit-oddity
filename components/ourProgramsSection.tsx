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
                    <ItemDescription>If you do not have CrossFit experience, we have a Foundations course to work you into how it works. We want to make sure you’re comfortable before joining classes. Then you can join our main Group Training. If you already have experience, you can join right in.</ItemDescription>
                </Item>
                <Item>
                    <ItemHeader>Barbell Club</ItemHeader>
                    <ItemDescription>We work on olympic weightlifting. Each session is led by a trained coach. These are in 8 week block programs.</ItemDescription>
                </Item>
                <Item>
                    <ItemHeader>Yoga Classes</ItemHeader>
                    <ItemDescription>This program is included in your membership. There are two per week, see the schedule for class times.</ItemDescription>
                </Item>
            </ItemList>
        </FullWidthSection>
    );
}