import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";

import EditActivityPopup from "../components/EditActivityPopup";
import Activity from "../components/Activity";
import AddActivity from "../components/AddActivity";
//icons
import { BiSortAlt2 } from "react-icons/bi";
//reducers
import { sortReducer, sortReducerInitState } from "../reducers/sortReducer";
import { inputReducer, inputReducerInitState } from "../reducers/inputReducer";
import Summary from "../components/Summary";

function Bike() {
  //reducers
  const [inputState, dispatchInputState] = useReducer(
    inputReducer,
    inputReducerInitState
  );
  const [sortState, dispatchSortState] = useReducer(
    sortReducer,
    sortReducerInitState
  );
  const [activities, setActivities] = useState([]);
  //edycja taska
  const [openEditPopup, setOpenEditPopup] = useState(false);
  //zmienna po kliknięciu "edytuj" przyjmuje id danej aktywności,
  //aby po wprowadzeniu zmian w popupie za jej pomocą ustawić, którą aktywność
  //z listy edytować.
  const [editId, setEditId] = useState("");
  //
  useEffect(() => {
    async function fetchBackend() {
      let data = await fetch("http://127.0.0.1:8888/bikeActivities");
      let response = await data.json();

      setActivities(response.bikeActivities);
    }

    fetchBackend();
  }, []);
  //komunikacja z backendem

  const deleteItemFromBackend = (id) => {
    fetch(`http://localhost:8888/bikeActivities/${id}`, {
      method: "DELETE",
    });
  };
  const sendItemToBackend = (item) => {
    fetch("http://localhost:8888/bikeActivities", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  //sortowanie aktywności
  const sortResults = (e) => {
    if (e.target.id === "distanceOfActivity") {
      if (sortState.distanceSort) {
        setActivities(
          [...activities].sort(
            (a, b) => a.distanceOfActivity - b.distanceOfActivity
          )
        );
      } else {
        setActivities(
          [...activities].sort(
            (a, b) => b.distanceOfActivity - a.distanceOfActivity
          )
        );
      }
      dispatchSortState({ type: "distanceSort" });
    } else if (e.target.id === "timeOfActivity") {
      if (sortState.timeSort) {
        setActivities(
          [...activities].sort((a, b) => a.timeOfActivity - b.timeOfActivity)
        );
      } else {
        setActivities(
          [...activities].sort((a, b) => b.timeOfActivity - a.timeOfActivity)
        );
      }
      dispatchSortState({ type: "timeSort" });
    } else if (e.target.id === "dateOfActivity") {
      if (sortState.dateSort) {
        setActivities(
          [...activities].sort(
            (a, b) => new Date(a.dateOfActivity) - new Date(b.dateOfActivity)
          )
        );
      } else {
        setActivities(
          [...activities].sort(
            (a, b) => new Date(b.dateOfActivity) - new Date(a.dateOfActivity)
          )
        );
      }
      dispatchSortState({ type: "dateSort" });
    }

    // setActivities(sorted === undefined ? activities : sorted);
  };
  return (
    <Container>
      <Menu>
        <AddActivity
          inputState={inputState}
          dispatchInputState={dispatchInputState}
          setActivities={setActivities}
          sendItemToBackend={sendItemToBackend}
        />
        <Summary />
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
              <th>
                DATA
                <BiSortAlt2
                  className="sort-icons"
                  id="dateOfActivity"
                  onClick={sortResults}
                />
              </th>
              <th>
                CZAS
                <BiSortAlt2
                  className="sort-icons"
                  id="timeOfActivity"
                  onClick={sortResults}
                />
              </th>
              <th>
                DYSTANS
                <BiSortAlt2
                  className="sort-icons"
                  id="distanceOfActivity"
                  onClick={sortResults}
                />
              </th>
              <th>KALORIE</th>
              <th>ŚR. TEMPO</th>
              <th>OPERATIONS</th>
            </tr>
            {activities?.map((item, index) => {
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
            {/* {renderTableData} */}
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

    .sort-icons {
      font-size: 16px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
