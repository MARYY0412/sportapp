import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Profile() {
  const [user, setUser] = useState({});
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
        setUser(data.data);
      });
  }, []);
  return (
    <Container>
      <p>{user.username}</p>
      <p>{user.email}</p>
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
