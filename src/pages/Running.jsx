import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function Running() {
  const [state, dispatch] = useReducer({});
  const [activities, setActivities] = useState([]);

  const deleteItemFromBackend = (id) => {};
  const submit = async (e) => {};
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
            defaultValue={state.dateOfActivity}
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
            defaultValue={state.timeOfActivity}
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
            defaultValue={state.distanceOfActivity}
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
            {activities.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.dateOfActivity}</td>
                  <td>{item.timeOfActivity}</td>
                  <td>{item.distanceOfActivity}</td>
                  <td>xxx</td>
                  <td>xxx</td>
                  <Operations>
                    <button
                      id={item.id}
                      onClick={(e) => {
                        const filtered = activities.filter((obj) => {
                          return obj.id !== e.target.id;
                        });

                        setActivities(filtered);

                        deleteItemFromBackend(item.id);
                      }}
                    >
                      delete
                      {/* <ImCross/> */}
                    </button>
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

export default Running;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);

  width: 90%;
  height: 40rem;
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

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 1s all;
    padding: 2vh;
    cursor: pointer;
  }
  button:hover {
    color: red;
  }
`;
