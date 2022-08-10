import styled from 'styled-components'

const Item = styled.section`
    width: 450px;
    max-height: 250px;
    background-color: red;
    margin: 5px;
    flex-grow: 1;
    padding: 5px;
    background-color: #f4f4f4;
    border: 1px solid lightgray;
    border-radius: 15px;
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
`;

const ItemDescription = styled.p`
    padding: 15px;
`;

export const LocationSection = () => {
    return (
        <Item>
            <ItemHeader>How to find us</ItemHeader>
            <ItemDescription>asdf</ItemDescription>
        </Item>
    );
}