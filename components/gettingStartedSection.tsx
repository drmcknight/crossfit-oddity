import styled from 'styled-components'

const Item = styled.section`
    height: 270px;
    margin: 0;
    flex-basis: 50%;
    padding: 5px;
    background-color: #f4f4f4;
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
`;

const ItemDescription = styled.p`
    padding: 0 40px 40px 40px;
`;

const LinkList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const Link = styled.a`
    display: inline-block;
    padding: 10px;
    background-color: #7cda24;
    color: white;
    cursor: pointer;
    margin-right: 15px;
    &:hover {
        color: white;
    }
`;


export const GettingStartedSection = () => {
    return (
        <Item>
            <ItemHeader>Just Getting Started?</ItemHeader>
            <ItemDescription>
                We understand that starting something new can be intimidating. Use the resources below to hopefully take the stress out of getting started.
            </ItemDescription>
            <LinkList>
                <Link>Take a tour of the gym</Link>
                <Link>Read about the On Ramp</Link>
            </LinkList>
        </Item>
    );
}