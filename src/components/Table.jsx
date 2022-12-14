import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import Activity from "./Activity";
import { BiSortAlt2 } from "react-icons/bi";

import { sortReducer, sortReducerInitState } from "../reducers/sortReducer";
function Table({ activities, setActivities, open, setOpen, setEditId }) {
  const [sortState, dispatchSortState] = useReducer(
    sortReducer,
    sortReducerInitState
  );
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
  const deleteItemFromBackend = (id) => {
    fetch(`http://localhost:8888/bikeActivities/${id}`, {
      method: "DELETE",
    });
  };
  useEffect(() => {
    async function fetchBackend() {
      let data = await fetch("http://127.0.0.1:8888/bikeActivities");
      let response = await data.json();

      setActivities(response.bikeActivities);
    }

    fetchBackend();
  }, [setActivities]);
  return (
    <Container>
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
          <th>??R. TEMPO</th>
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
              open={open}
              setOpen={setOpen}
              setEditId={setEditId}
            />
          );
        })}
      </tbody>
    </Container>
  );
}

export default Table;

const Container = styled.table`
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
