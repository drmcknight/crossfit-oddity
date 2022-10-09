import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
  height: 60px;
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const MenuLinks = styled.div`
  @media (max-width: 768px) {
    background-color: white;
    display: flex;
    flex-flow: column;
    padding-top: 60px;
    align-items: center;
    height: 100%;
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
  @media (max-width: 768px) {
    width: 100%
    display: block;
    color: black;
    &:visited {
      color: black;
    }
    &:hover {
      color: #7cda24;
    }
  }
`;



export const Menu = () => {
  const [isOpen, openMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  });
    return (
      <React.Fragment>
        <Nav style={{display: isOpen || !isMobile ? 'block': 'none'}}>
            <MenuLinks>
              <Link href="/crossfit-oddity/our-gym">Our Gym</Link>
              <Link href="/crossfit-oddity/memberships">Memberships</Link>
              <Link href="/crossfit-oddity/schedule">Schedule</Link>
            </MenuLinks>
        </Nav>
        <FontAwesomeIcon icon={faBars} color='black' style={{display: isMobile ? 'block' : 'none', zIndex: 1, padding: '10px'}} onClick={() => openMenu(!isOpen)} />
      </React.Fragment>
    );
}