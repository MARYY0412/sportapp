import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FiUserCheck } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { MdDirectionsBike } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
function Navigation({ dark, setDark }) {
  return (
    <Box>
      <NavbarLink to="/">
        <IoMdHome className="icon" />
        <span>HOME</span>
      </NavbarLink>
      <NavbarLink to="/bike">
        <MdDirectionsBike className="icon" />
        <span>BIKE</span>
      </NavbarLink>
      <NavbarLink to="/running">
        <FaRunning className="icon" />
        <span>RUNNING</span>
      </NavbarLink>
      <NavbarLink to="/profile">
        <FiUserCheck className="icon" />
        <span>PROFILE</span>
      </NavbarLink>
    </Box>
  );
}

export default Navigation;

const Box = styled.div`
  padding: 2rem;
  margin: 2rem;
  backdrop-filter: blur(2px);

  width: 90%;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  font-family: Arial;
  letter-spacing: 5px;
  color: black;

  display: flex;
  padding: 2vh;

  transition: 2s all;
  :hover {
    cursor: pointer;
  }
  .icon {
    font-size: 5vh;
    margin: 0rem 1rem;
  }

  @media only screen and (max-width: 700px) {
    width: 12rem;
  }
`;
