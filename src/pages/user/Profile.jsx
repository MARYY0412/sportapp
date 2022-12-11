import React, { useEffect } from "react";
import styled from "styled-components";

function Profile() {
  useEffect(() => {
    fetch("http://localhost:8888/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  }, []);
  return (
    <Container>
      <p>{}</p>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);

  width: 90%;
  height: 40rem;
`;
