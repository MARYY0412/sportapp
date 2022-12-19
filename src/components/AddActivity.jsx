import React from "react";
import styled from "styled-components";
import uuid from "react-uuid";
function AddActivity({
  inputState,
  dispatchInputState,
  setActivities,
  sendItemToBackend,
}) {
  const submit = async (e) => {
    e.preventDefault();

    if (
      inputState.dateOfActivity === undefined ||
      inputState.timeOfActivity === undefined ||
      inputState.distanceOfActivity === undefined
    )
      alert("Uzupełnij wszystkie pola!");
    else {
      const bikeActivity = {
        id: uuid(),
        timeOfActivity: inputState.timeOfActivity,
        dateOfActivity: inputState.dateOfActivity,
        distanceOfActivity: inputState.distanceOfActivity,
      };
      setActivities((current) => [...current, bikeActivity]);
      sendItemToBackend(bikeActivity);
    }
  };
  const changeInputsValues = (e) => {
    switch (e.target.name) {
      case "dateOfActivity":
        dispatchInputState({
          type: "setDate",
          field: e.target.name,
          payload: e.target.value,
        });
        break;
      case "timeOfActivity":
        dispatchInputState({
          type: "setTime",
          field: e.target.name,
          payload: e.target.value,
        });
        break;
      case "distanceOfActivity":
        dispatchInputState({
          type: "setDistance",
          field: e.target.name,
          payload: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Form>
      <h2>Dodaj aktywność</h2>
      <div>
        <p>DATA</p>
        <input
          type="date"
          onChange={changeInputsValues}
          name="dateOfActivity"
          defaultValue={inputState.dateOfActivity}
        />
      </div>
      <div>
        <p>CZAS</p>
        <input
          type="number"
          onChange={changeInputsValues}
          name="timeOfActivity"
          min="0"
          defaultValue={inputState.timeOfActivity}
        />
      </div>
      <div>
        <p>DYSTANS</p>
        <input
          type="number"
          onChange={changeInputsValues}
          name="distanceOfActivity"
          min="0"
          defaultValue={inputState.distanceOfActivity}
        />
      </div>
      <div>
        {" "}
        <button type="submit" onClick={submit}>
          dodaj
        </button>
      </div>
    </Form>
  );
}

export default AddActivity;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-right: 1px solid black;
  @media only screen and (max-width: 600px) {
    width: 100%;
    border: none;
  }
  > div {
    width: 100%;
    padding: 0rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 100%;
    text-align: left;
  }
  input {
    margin: 1vh;
    width: 60%;
    background-color: rgba(15, 100, 150, 0.5);
    border: none;
    text-align: center;

    //usuniecie strzalek z inputa type=number
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  button {
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: rgba(15, 100, 150, 0.5);
    letter-spacing: 3px;
    font-size: 1rem;
    padding: 1vh;
  }
`;
