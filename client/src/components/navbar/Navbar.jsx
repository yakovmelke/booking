import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>yakov-booking</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>login</NavButton>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  background-color: #003580;
  height: 50px;
  display: flex;
  justify-content: center;
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: 500;
`;

const NavItems = styled.div`
 
`;

const NavButton = styled.button`
 margin-left:20px;
 border:none;
 padding: 5px 10px;
 cursor: pointer;
 color: #003580;
`;
