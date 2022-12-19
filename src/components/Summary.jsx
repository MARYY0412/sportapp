import React from "react";
import styled from "styled-components";
function Summary() {
  return (
    <Container>
      <h2>Podsumowanie</h2>
      <div>
        <p>dystans:</p> <p>xx</p>
      </div>
      <div>
        <p>czas:</p> <p>xx</p>
      </div>
      <div>
        <p>śr. prędkość:</p> <p>xx</p>
      </div>
      <div>
        <p>kalorie:</p> <p>xx</p>
      </div>
    </Container>
  );
}

export default Summary;

const Container = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    align-items: center;
    width: 100%;
    * {
      margin: 1vh;
    }
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    * {
      width: 100%;
      text-align: center;
    }
  }
`;
