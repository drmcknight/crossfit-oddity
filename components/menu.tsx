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
`;


export const Menu  = () => {
    return (
        <Nav>
          <Link href="/our-gym">Our Gym</Link>
          <Link href="/memberships">Memberships</Link>
          <Link href="/schedule">Schedule</Link>
        </Nav>
    );
}