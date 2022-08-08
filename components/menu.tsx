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
          <Link href="">About Us</Link>
          <Link href="">Memberships</Link>
          <Link href="">Programs</Link>
          <Link href="">Contact Us</Link>
        </Nav>
    );
}