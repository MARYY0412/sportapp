import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//firebase
import { SignInWithGoogle } from "./../../Firebase";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  // const [isValid, setIsValid] = useState(false);

  const submit = () => {
    fetch("http://localhost:8888/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "UserLogin");
      });
  };

  //FUNKCJE POTRZEBNE DO WALIDACJI FORMULARZA

  return (
    <Container>
      <div>
        <p>Username:</p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </div>

      <div>
        <p>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>

      <Button type="submit" onClick={submit}>
        LOGIN
      </Button>

      <InfoSection>
        <span>
          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" name="remember"></input>
        </span>
        <Link to="/forgotpassword">forgot password</Link>
        <Link to="/register">register</Link>
        <button className="google-button" onClick={SignInWithGoogle}>
          zaloguj za pomocą Google
        </button>
        <p className="error-p">{error}</p>
      </InfoSection>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);

  width: 20rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3vh;

    input {
      text-align: center;
      height: 5vh;
      background-color: rgba(15, 100, 150, 0.5);
      transition: 2s all;
      border: none;
    }
    input:hover {
      -webkit-box-shadow: 0px 0px 15px 0px rgba(66, 68, 90, 1);
      -moz-box-shadow: 0px 0px 15px 0px rgba(66, 68, 90, 1);
      box-shadow: 0px 0px 15px 0px rgba(66, 68, 90, 1);
    }

    * {
      margin: 1vh;
    }
  }
`;

const Button = styled.button`
  width: 80%;
  padding: 2vh;
  border: none;
  letter-spacing: 1vh;
  transition: 2s all;

  :hover {
    cursor: pointer;
    border: none;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 25px 0px rgba(66, 68, 90, 1);
  }
`;

const InfoSection = styled.div`
  span {
    display: flex;
    align-items: center;
  }
  //stylizowanie elementów Link
  a {
    text-align: center;
    text-decoration: none;
    color: rgba(15, 100, 150);
    padding: 1vh;

    transition: 2s all;
  }
  a:hover {
    background-color: white;
  }
  //stylizowanie przycisku logowania Google
  .google-button {
    padding: 1rem;
    border: none;
    cursor: pointer;
  }
  .error-p {
    color: red;
    font-size: 10px;
  }
`;
