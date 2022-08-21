import styled from 'styled-components'

const FullWidthSection = styled.section`
    max-height: 550px;
    margin: 5px;
    flex-basis: 100%;
    background-color: #7cda24;
    margin: 0;
    
`;

const ItemHeader = styled.h2`
    text-transform: uppercase;
    font-family: Oswald;
    text-align: center;
    font-size: 15px;
`;

const ItemList = styled.div`
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Item = styled.summary`
    flex-basis: 33%;
    padding: 0px 25px;
`;

const ItemDescription = styled.p`
`;


export const OurProgramsSection = () => {
    return (
        <FullWidthSection>
            <ItemList>
                <Item>
                    <ItemHeader>Engaging Programs</ItemHeader>
                </Item>
                <Item>
                    <ItemHeader>Air Conditioning</ItemHeader>
                </Item>
                <Item>
                    <ItemHeader>24hr Access</ItemHeader>
                </Item>
            </ItemList>
        </FullWidthSection>
    );
}