import styled from 'styled-components'

const Item = styled.section`
    flex-basis: 50%;
    padding: 5px;
    background-color: white;
    margin-right: 4%;
    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const ItemHeader = styled.h2`
    font-family: Oswald;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
`;

const ItemSubHeader = styled.span`
    font-family: Oswald;
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
    &:visited {
        color: white;
    }
`;


export const OurGymSection = () => {
    return (
        <Item>
            <ItemHeader>Our Values</ItemHeader>
            <ItemSubHeader>Community</ItemSubHeader>
            <p>Our community is incredibly welcoming and supportive – always willing to offer advice, coaching and encouragement. We also participate in community events such as Wod for Water.</p>
            <ItemSubHeader>Classes</ItemSubHeader>
            <p>All classes are coach led and we offer a flexible schedule for our clients. We also educate our clients with nutrition workshops, mobility clinics, and challenges.</p>
            <ItemSubHeader>Programming</ItemSubHeader>
            <p>We all have different goals and we understand this at Oddity. We will individualize workouts to meet these needs and do this in a group setting.</p>
        </Item>
    );
}