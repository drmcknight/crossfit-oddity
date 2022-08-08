import styled from 'styled-components';

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu  = () => {
    return (
        <Nav>
          <a href="">About Us</a>
          <a href="">Memberships</a>
          <a href="">Programs</a>
          <a href="">Contact Us</a>
        </Nav>
    );
}