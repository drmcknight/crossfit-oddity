import styled from 'styled-components'

const Item = styled.section`
    flex-basis: 50%;
    padding: 5px;
    background-color: white;
    margin-right: 4%;
    margin-bottom: 35px;
    @media (max-width: 768px) {
        flex-basis: 100%;
        margin-right: unset;
        margin-bottom: unset;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
`;

const MembershipList = styled.div`
    display: flex;
    padding: 10px;
    margin-top: 45px;
    flex-flow: row wrap;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        margin-top: unset;
    }
`;


const MembershipWrapper = styled.div`
`;

const PriceDollar = styled.span`
    font-size: 100px;
    color: #7cda24;
`;
const PricePerMonth = styled.span`
    font-size: small;
`;

const LinkList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 49px;
    @media (max-width: 768px) {
        margin: 20px 0 20px 0;
    }
`;

const MembershipOptionsLink = styled.a`
    display: inline-block;
    padding: 10px;
    background-color: #7cda24;
    color: white;
    cursor: pointer;
    margin: auto;
    &:hover {
        color: white;
    }
    &:visited {
        color: white;
    }
`;


export const MembershipsSection = () => {
    return (
        <Item>
            <ItemHeader>Unlimited Access</ItemHeader>
            <MembershipList>
                <MembershipWrapper>
                    <PriceDollar>$150</PriceDollar><PricePerMonth>/month</PricePerMonth>
                </MembershipWrapper>
            </MembershipList>
            <LinkList>
                <MembershipOptionsLink href="/crossfit-oddity/memberships">View more membership options</MembershipOptionsLink>
            </LinkList>
        </Item>
    );
}