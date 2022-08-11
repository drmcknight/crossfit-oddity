import styled from 'styled-components'

const Item = styled.section`
    height: 270px;
    background-color: red;
    flex-basis: 50%;
    padding: 5px;
    background-color: #292d3f;
    color: white;
    margin: 0;
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    text-align: center;
`;

const MembershipList = styled.div`
    display: flex;
    height: 140px;
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
                <MembershipOptionsLink>View more membership options</MembershipOptionsLink>
            </LinkList>
        </Item>
    );
}