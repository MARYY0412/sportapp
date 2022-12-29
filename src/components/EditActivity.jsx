import React, { useState, useEffect } from "react";
import styled from "styled-components";

function EditActivity({
  open,
  setOpen,
  id,
  activities,
  setActivities,
  sendItemToBackend,
}) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [distance, setDistance] = useState();
  useEffect(() => {
    const x = activities.find((item) => {
      return item.id === id;
    });
    if (x !== undefined) {
      setDate(x.dateOfActivity);
      setTime(x.timeOfActivity);
      setDistance(x.distanceOfActivity);
    }
  }, [open]);

  const submit = (e) => {
    e.preventDefault();

    setActivities(
      activities.map((item) => {
        if (item.id === id)
          return {
            id: id,
            timeOfActivity: time,
            dateOfActivity: date,
            distanceOfActivity: distance,
            speedOfActivity: (distance / 1000 / (time / 60)).toFixed(2),
          };
        else return item;
      })
    );

    let item = {
      id: id,
      timeOfActivity: time,
      dateOfActivity: date,
      distanceOfActivity: distance,
    };

    sendItemToBackend(item);
    setOpen(!open);
  };
  const close = () => {
    setOpen(!open);
  };
  const changeInputs = (e) => {
    if (e.target.name === "date") setDate(e.target.value);
    else if (e.target.name === "time") setTime(e.target.value);
    else if (e.target.name === "distance") setDistance(e.target.value);
  };

  if (!open) return null;
  return (
    <Popup>
      <form>
        <p>data</p>
        <input name="date" type="date" value={date} onChange={changeInputs} />
        <p>czas</p>
        <input
          name="time"
          type="number"
          value={time === undefined ? 0 : time}
          onChange={changeInputs}
        />
        <p>dystans</p>
        <input
          name="distance"
          type="number"
          value={distance === undefined ? 0 : distance}
          onChange={changeInputs}
        />
        <p>
          <button onClick={submit}>edytuj</button>
          <button onClick={close}>cofnij</button>
        </p>
      </form>
    </Popup>
  );
}

export default EditActivity;

const Popup = styled.div`
  position: fixed;

  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.8);
  outline: none;

  form {
    padding: 5rem;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    > input {
      margin: 2vh;

      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    button {
      width: 50%;
      padding: 2px;
      border: 2px solid rgba(15, 100, 150, 0.5);
      background-color: rgba(15, 100, 150, 0.5);
      cursor: pointer;

      transition: 1s all;
      :hover {
        border-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
