import styled from 'styled-components'

const Item = styled.section`
    background-color: red;
    flex-basis: 50%;
    padding: 5px;
    background-color: #292d3f;
    color: white;
    margin: 0;
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
`;

const MembershipList = styled.div`
    display: flex;
    padding: 10px;
    margin-top: 30px;
    flex-flow: row wrap;
    justify-content: space-evenly
`;


const MembershipWrapper = styled.div`
`;

const MembershipHeader = styled.div`
    font-style: italic;
    margin-left: 40px;
`;

const PriceDollar = styled.span`
    font-size: 70px;
    color: #7cda24;
`;
const PricePerMonth = styled.span`
    font-size: small;
    color: white;
`;

const LinkList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 35px;
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
            <MembershipList>
                <MembershipWrapper>
                    <PriceDollar>$150</PriceDollar><PricePerMonth>/month</PricePerMonth>
                    <MembershipHeader>Unlimited Access</MembershipHeader>
                </MembershipWrapper>
                <MembershipWrapper>
                    <PriceDollar>$135</PriceDollar><PricePerMonth>/month</PricePerMonth>
                    <MembershipHeader>3 days/week</MembershipHeader>
                </MembershipWrapper>
            </MembershipList>
            <LinkList>
                <MembershipOptionsLink href="/memberships">View more membership options</MembershipOptionsLink>
            </LinkList>
        </Item>
    );
}