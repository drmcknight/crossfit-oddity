import styled from 'styled-components'

const Item = styled.section`
    flex-basis: 50%;
    background-color: white;
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
`;

const ItemDescription = styled.p`
    padding: 0 40px 40px 40px;
`;

const LinkList = styled.ul`

`;

const Link = styled.a`
    color: black;
    &:hover {
        color: #7cda24;
    }
    &:visited {
        color: black;
    }
`;


export const GettingStartedSection = () => {
    return (
        <Item>
            <ItemHeader>Getting Started</ItemHeader>
            We understand that starting something new can be intimidating. Use the resources below to hopefully take the stress out of getting started.
            <LinkList>
                <li><Link href="/crossfit-oddity/our-gym">Tour the gym</Link></li>
                <li><Link href="/crossfit-oddity/on-ramp">Read our Getting Started guide</Link></li>
                <li><Link href="/crossfit-oddity/location">Directions to our location</Link></li>
            </LinkList>
        </Item>
    );
}