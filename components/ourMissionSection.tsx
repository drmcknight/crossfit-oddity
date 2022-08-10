import styled from 'styled-components'

const Item = styled.section`
    width: 450px;
    max-height: 250px;
    background-color: red;
    margin: 5px;
    flex-grow: 1;
    padding: 5px;
    background-color: #292d3f;
    color: white;
    margin: 0;
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    padding-left: 25px; 
`;

const ItemDescription = styled.p`
    padding: 0 40px 40px 40px;
    font-style: italic;
`;


export const OurMissionSection = () => {
    return (
        <Item>
            <ItemHeader>Our Mission</ItemHeader>
            <ItemDescription>"Take ordinary people and give them extraordinary results by focusing all of our energy, effort and finances on our mission. The result is an amazing gym, talented coaches and a fantastic, welcoming community of members exceeding their fitness goals."</ItemDescription>
        </Item>
    );
}