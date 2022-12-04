import React, { useReducer } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
const reducer = (state, action) => {
  switch (action.type) {
    case "setDate":
      return {
        ...state,
        [action.field]: [action.payload],
      };
    case "setTime":
      return {
        ...state,
        [action.field]: [action.payload],
      };
    case "setDistance":
      return {
        ...state,
        [action.field]: [action.payload],
      };
    default:
      return state;
  }
};
function EditActivityPopup({
  open,
  setActivities,
  activities,
  editId,
  setOpenEditPopup,
  sendItemToBackend,
}) {
  // let initialState = activities.filter((obj) => {
  //   if (obj.id === editId) return obj;
  // });

  const [state, dispatch] = useReducer(reducer, {});
  if (!open) return null;

  const closePopup = () => {
    setOpenEditPopup(false);
  };
  const setTime = (e) => {
    dispatch({
      type: "setTime",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const setDate = (e) => {
    dispatch({
      type: "setDate",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const setDistance = (e) => {
    dispatch({
      type: "setDistance",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    let array = activities.map((obj) => {
      if (obj.id === editId)
        return {
          id: editId,
          timeOfActivity: state.timeOfActivity,
          dateOfActivity: state.dateOfActivity,
          distanceOfActivity: state.distanceOfActivity,
        };
      else return obj;
    });
    setActivities(array);
    let item = {
      id: editId,
      timeOfActivity: state.timeOfActivity,
      dateOfActivity: state.dateOfActivity,
      distanceOfActivity: state.distanceOfActivity,
    };

    sendItemToBackend(item);
    setOpenEditPopup(false);
  };

  return (
    <Container>
      <ImCross className="exit-button" onClick={closePopup} />
      <h2>Edytuj aktywność</h2>
      <form>
        <label htmlFor="date">data</label>
        <input
          type="date"
          name="dateOfActivity"
          onChange={setDate}
          defaultValue={state.dateOfActivity}
        />
        <label htmlFor="time">czas</label>
        <input
          name="timeOfActivity"
          type="number"
          min="0"
          placeholder="Podaj czas w minutach"
          onChange={setTime}
          defaultValue={state.timeOfActivity}
        />
        <label htmlFor="distance">dystans</label>
        <input
          name="distanceOfActivity"
          type="number"
          min="0"
          placeholder="Podaj dystans w metrach"
          onChange={setDistance}
          defaultValue={state.distanceOfActivity}
        />
        <button onClick={submit}>edytuj aktywność</button>
      </form>
    </Container>
  );
}

export default EditActivityPopup;

const Container = styled.div`
  .exit-button {
    position: fixed;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  h2 {
    margin: 5vh;
  }
  position: absolute;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  /* height: 30rem; */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(15, 100, 150, 0.5);
  backdrop-filter: blur(10px);

  box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.8);
  outline: none;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 2vh;
      width: 100%;
      text-align: center;
    }
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    button {
      width: 100%;
      border: none;
      cursor: pointer;
      background-color: white;
      letter-spacing: 3px;
      font-size: 1rem;
      padding: 2vh;
      margin: 3vh;
      transition: 1s all;
    }
    button:hover {
      box-shadow: inset 0px 0px 3px black;
    }
  }
`;
