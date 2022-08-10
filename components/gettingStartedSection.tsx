import styled from 'styled-components'

const Item = styled.section`
    width: 450px;
    max-height: 250px;
    margin: 5px;
    flex-grow: 1;
    padding: 5px;
    background-color: #f4f4f4;
    border: 1px solid lightgray;
    border-radius: 15px;
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    padding-left: 25px;
`;

const ItemDescription = styled.p`
    padding: 15px;
`;


export const GettingStartedSection = () => {
    return (
        <Item>
            <ItemHeader>Getting Started</ItemHeader>
            <ItemDescription>We understand that starting something new can be intimidating. We take the stress out of getting started by making it as easy as possible.</ItemDescription>
        </Item>
    );
}