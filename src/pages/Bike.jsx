import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import EditActivityPopup from "../components/EditActivityPopup";
import Activity from "../components/Activity";

const reducer = (state, action) => {
  switch (action.type) {
    case "setDate":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "setTime":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "setDistance":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

function Bike() {
  const [state, dispatch] = useReducer(reducer, {});
  const [activities, setActivities] = useState([]);
  //edycja taska
  const [openEditPopup, setOpenEditPopup] = useState(false);
  //zmienna po kliknięciu "edytuj" przyjmuje id danej aktywności,
  //aby po wprowadzeniu zmian w popupie za jej pomocą ustawić, którą aktywność
  //z listy edytować.
  const [editId, setEditId] = useState("");
  useEffect(() => {
    getItemsFromBackend();
  }, []);
  //komunikacja z backendem
  const sendItemToBackend = (item) => {
    fetch("http://localhost:8888/bikeActivities", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  const deleteItemFromBackend = (id) => {
    fetch(`http://localhost:8888/bikeActivities/${id}`, {
      method: "DELETE",
    });
  };
  const getItemsFromBackend = async () => {
    return fetch("http://127.0.0.1:8888/bikeActivities")
      .then((res) => res.json())
      .then((data) => setActivities(data.bikeActivities));
  };
  //obsługa formularza
  const submit = async (e) => {
    e.preventDefault();

    if (
      state.dateOfActivity === undefined ||
      state.timeOfActivity === undefined ||
      state.distanceOfActivity === undefined
    )
      alert("Uzupełnij wszystkie pola!");
    else {
      const bikeActivity = {
        id: uuid(),
        timeOfActivity: state.timeOfActivity,
        dateOfActivity: state.dateOfActivity,
        distanceOfActivity: state.distanceOfActivity,
      };
      setActivities((current) => [...current, bikeActivity]);
      sendItemToBackend(bikeActivity);
    }
  };
  const changeInputsValues = (e) => {
    switch (e.target.name) {
      case "dateOfActivity":
        dispatch({
          type: "setDate",
          field: e.target.name,
          payload: e.target.value,
        });
        break;
      case "timeOfActivity":
        dispatch({
          type: "setTime",
          field: e.target.name,
          payload: e.target.value,
        });
        break;
      case "distanceOfActivity":
        dispatch({
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
    <Container>
      <Menu>
        <Form>
          <h2>Dodaj aktywność</h2>
          <div>
            <p>DATA</p>
            <input
              type="date"
              onChange={changeInputsValues}
              name="dateOfActivity"
              defaultValue={state.dateOfActivity}
            />
          </div>
          <div>
            <p>CZAS</p>
            <input
              type="number"
              onChange={changeInputsValues}
              name="timeOfActivity"
              min="0"
              defaultValue={state.timeOfActivity}
            />
          </div>
          <div>
            <p>DYSTANS</p>
            <input
              type="number"
              onChange={changeInputsValues}
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
        <Summary>
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
        </Summary>
      </Menu>
      <div className="table-div">
        <EditActivityPopup
          open={openEditPopup}
          setActivities={setActivities}
          editId={editId}
          activities={activities}
          setOpenEditPopup={setOpenEditPopup}
          sendItemToBackend={sendItemToBackend}
        />
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
                <Activity
                  key={item.id}
                  item={item}
                  index={index}
                  activities={activities}
                  setActivities={setActivities}
                  deleteItemFromBackend={deleteItemFromBackend}
                  setOpenEditPopup={setOpenEditPopup}
                  openEditPopup={openEditPopup}
                  setEditId={setEditId}
                  sendItemToBackend={sendItemToBackend}
                />
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

  padding-top: 1rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .table-div {
    overflow: auto;
    height: 30rem;
  }
  //ustawiamy aby popup do edytowania się wyświetlał odpowiednio
  /* position: relative; */
`;
const Menu = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
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
    > input {
      width: 60%;
    }
  }

  p {
    width: 100%;
    text-align: left;
  }
  input {
    margin: 1vh;
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
const Summary = styled.div`
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
const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow: auto;
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }

  th {
    text-align: left;
    padding: 16px;
    white-space: nowrap;
  }
`;
