import styled from 'styled-components';

const Nav = styled.nav`
  height: 60px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  line-height: 60px;
  padding-right: 20px;
  color: white;
  &:visited {
    color: white;
  }
  &:hover {
    color: #7cda24;
  }
`;


export const Menu  = () => {
    return (
        <Nav>
          <Link href="/crossfit-oddity/our-gym">Our Gym</Link>
          <Link href="/crossfit-oddity/memberships">Memberships</Link>
          <Link href="/crossfit-oddity/schedule">Schedule</Link>
        </Nav>
    );
}