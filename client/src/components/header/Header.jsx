import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderWrpper>
      <HeaderContainer>
        <HeaderList>
          <HeaderListItem className="activ">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car reatals</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </HeaderListItem>
        </HeaderList>
        <HeaderTilte>A lifetime of discounects? It's Genius</HeaderTilte>
        <HeaderDesc>
          Get rewarded for your travels - unlock instant savings 10% or more
          with a free Lamabooking account{" "}
        </HeaderDesc>
        <HeaderBtn>Sign in / Register</HeaderBtn>
          <HeaderSearch>
            <HeaderSearchItem>
            <FontAwesomeIcon icon={faBed} />
            <HeaderSearchInput type="text" placeholder="Where are you going" />
            </HeaderSearchItem> 
            <HeaderSearchItem>
            <FontAwesomeIcon icon={faCalendarDays} />
            <HeaderSearchInput type="text" placeholder="Where are you going" />
            </HeaderSearchItem>
            <HeaderSearchItem>
            <FontAwesomeIcon icon={faBed} />
            <HeaderSearchInput type="text" placeholder="Where are you going" />
            </HeaderSearchItem>
          </HeaderSearch>
      </HeaderContainer>
    </HeaderWrpper>
  );
};

export default Header;

const HeaderWrpper = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
`;
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  &&.activ {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`;
const HeaderTilte = styled.h1``;
const HeaderDesc = styled.p`
margin: 20px 0 ;
`;
const HeaderBtn = styled.button`
background-color: #0071c2;
color: white;
font-weight: 500;
border: none ;
padding: 10px;
cursor: pointer;
border-radius: 2px;
`;

const HeaderSearch = styled.div``
const HeaderSearchItem = styled.div``
const HeaderSearchInput = styled.input``

