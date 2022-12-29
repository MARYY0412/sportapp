import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function UserNav({ dark, setDark }) {
  return (
    <Box>
      <Link to="/login">LOGIN</Link>
      <Link to="/register">REGISTER</Link>
      <button
        type="button"
        className={dark === true ? `btn active` : `btn btn-dark`}
        data-toggle="button"
        aria-pressed="false"
        autoComplete="off"
        onClick={() => setDark(!dark)}
      >
        dark mode
      </button>
    </Box>
  );
}

export default UserNav;

const Box = styled.div`
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 4rem;
  background-color: rgba(255, 255, 255);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  > button {
    margin: 2vh;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 100%;
    color: black;
    background-color: white;
    text-decoration: none;
    font-size: 2vh;
    font-family: "Arial";
    padding: 2vh;

    letter-spacing: 2px;
    transition: 2s all;
  }
  a:hover {
    background-color: rgba(15, 100, 150, 0.2);
  }
`;
