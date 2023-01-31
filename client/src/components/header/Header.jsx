import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleOption = (name, opertion) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opertion === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <HeaderWrpper>
      <HeaderContainer
          type={type}
      >
        <HeaderList 
        >
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
        {type !== "List" && (
          <>
            <HeaderTilte>A lifetime of discounects? It's Genius</HeaderTilte>
            <HeaderDesc>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Lamabooking account{" "}
            </HeaderDesc>
            <HeaderBtn>Sign in / Register</HeaderBtn>
            <HeaderSearch>
              <HeaderSearchItem>
                <FontAwesomeIcon color="lightgray" icon={faBed} />
                <HeaderSearchInput
                  type="text"
                  placeholder="Where are you going"
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon color="lightgray" icon={faCalendarDays} />
                <HeaderSearchText
                  onClick={() => {
                    setOpenDate(!openDate);
                    setOpenOptions(false);
                  }}
                >{`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yy"
                )} `}</HeaderSearchText>
                {openDate && (
                  <DateCContainer>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                    />
                  </DateCContainer>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon color="lightgray" icon={faPerson} />
                <HeaderSearchText
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpenDate(false);
                  }}
                >{`${options.adult} adults ${options.children} children ${options.room} room`}</HeaderSearchText>
                {openOptions && (
                  <Options>
                    <OptionsItem>
                      <OptionsText>Adult</OptionsText>
                      <OptionsCuonter>
                        <OptionsCounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionsCounterButton>
                        <OptionsCounterNumber>
                          {options.adult}
                        </OptionsCounterNumber>
                        <OptionsCounterButton
                          onClick={() => handleOption("adult", "i")}
                          disabled={options.adult >= 4}
                        >
                          +
                        </OptionsCounterButton>
                      </OptionsCuonter>
                    </OptionsItem>
                    <OptionsItem>
                      <OptionsText>Children</OptionsText>
                      <OptionsCuonter>
                        <OptionsCounterButton
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </OptionsCounterButton>
                        <OptionsCounterNumber>
                          {options.children}
                        </OptionsCounterNumber>
                        <OptionsCounterButton
                          disabled={options.children >= 4}
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionsCounterButton>
                      </OptionsCuonter>
                    </OptionsItem>
                    <OptionsItem>
                      <OptionsText>Room</OptionsText>
                      <OptionsCuonter>
                        <OptionsCounterButton
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </OptionsCounterButton>
                        <OptionsCounterNumber>
                          {options.room}
                        </OptionsCounterNumber>
                        <OptionsCounterButton
                          onClick={() => handleOption("room", "i")}
                          disabled={options.room >= 4}
                        >
                          +
                        </OptionsCounterButton>
                      </OptionsCuonter>
                    </OptionsItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderSearchBtn>Search</HeaderSearchBtn>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
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
  position: relative;
`;
const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: ${({type }) =>type === "List"
      ? `
     20px 0px 20px 0px;
  `
      : " 20px 0px 100px 0px;" };
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
  margin: 20px 0;
`;
const HeaderBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 2px;
`;

const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`;
const HeaderSearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`;
const HeaderSearchBtn = styled.button``;
const DateCContainer = styled.div`
  position: absolute;
  top: 50px;
`;
const Options = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  box-shadow: 0px 0px 10px -5px black;
  -webkit-box-shadow: 0px 0px 10px -5px black;
`;
const OptionsItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const OptionsCuonter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;
const OptionsText = styled.span``;
const OptionsCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
  &&:disabled {
    cursor: not-allowed;
  }
`;
const OptionsCounterNumber = styled.span``;
