import React, { useState, useReducer } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { ImCross } from "react-icons/im";
// https://medium.com/swlh/usereducer-form-example-16675fa60229
const reducer = (state, action) => {
  switch (action.type) {
    case "setDate":
      return {
        [action.field]: action.payload,
      };
    case "setTime":
      return {
        [action.field]: action.payload,
      };
    case "setDistance":
      return {
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

function Bike() {
  const [state = "", dispatch] = useReducer(reducer, {
    timeOfActivity: 0,
    dateOfActivity: "",
    distanceOfActivity: 0,
  });

  const [bikeActivities, setBikeActivities] = useState([
    { name: "activity 1" },
    { name: "activity 2" },
    { name: "activity 1" },
    { name: "activity 2" },
    { name: "activity 1" },
    { name: "activity 2" },
    { name: "activity 1" },
    { name: "activity 2" },
    { name: "activity 2" },
    { name: "activity 2" },
    { name: "activity 2" },
    { name: "activity 2" },
    { name: "activity 2" },
  ]);

  const sendItemToBackend = (item) => {
    fetch("http://localhost:8888/bikeActivities", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // setBikeActivities((current) => [...current, "Carl"]);
    // const bikeActivity = {
    //   name: "siemka",
    // };
    // sendItemToBackend(bikeActivity);

    console.log(state.dateOfActivity);
    console.log(state.timeOfActivity);
    console.log(state.distanceOfActivity);
  };

  return (
    <Container>
      <h2>Dodaj aktywność</h2>
      <Form>
        <div>
          <p>DATA</p>
          <input
            type="date"
            onChange={(e) => {
              dispatch({
                type: "setDate",
                field: e.target.name,
                payload: e.target.value,
              });
            }}
            name="dateOfActivity"
          />
        </div>
        <div>
          <p>CZAS</p>
          <input
            type="number"
            onChange={(e) => {
              dispatch({
                type: "setTime",
                field: e.target.name,
                payload: e.target.value,
              });
            }}
            name="timeOfActivity"
            min="0"
          />
        </div>
        <div>
          <p>DYSTANS</p>
          <input
            type="number"
            onChange={(e) => {
              dispatch({
                type: "setDistance",
                field: e.target.name,
                payload: e.target.value,
              });
            }}
            name="distanceOfActivity"
            min="0"
          />
        </div>
        <div>
          {" "}
          <button type="submit" onClick={submit}>
            dodaj
          </button>
        </div>
      </Form>
      <div>
        <Table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>DATA</th>
              <th>CZAS</th>
              <th>DYSTANS</th>
              <th>KALORIE</th>
              <th>ŚR. TEMPO</th>
              <th>OPERATIONS</th>
            </tr>
            {bikeActivities.map((item, index) => {
              return (
                <tr key={uuid()}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <Operations>
                    <ImCross />
                  </Operations>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Bike;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  width: 60%;
  text-align: center;

  padding-top: 1rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  > div {
    height: 30rem;
    overflow: auto;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 15rem;
  padding: 1vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > input {
      height: 3vh;
      width: 15rem;
    }
  }

  p {
    width: 100%;
    text-align: left;
  }
  input {
    width: 10rem;
    background-color: rgba(15, 100, 150, 0.5);
    border: none;
    text-align: center;
  }
  //usuniecie strzalek z inputa type=number
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button {
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: rgba(15, 100, 150, 0.5);
    letter-spacing: 3px;
    font-size: 1rem;
    padding: 2vh;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }

  th,
  td {
    text-align: left;
    padding: 16px;
    white-space: nowrap;
  }
  tr:nth-child(even) {
    background-color: white;
  }
`;
const Operations = styled.td`
  display: flex;
  justify-content: right;
  cursor: pointer;
  transition: 1s all;

  :hover {
    color: red;
  }
`;
