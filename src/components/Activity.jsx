import React from "react";
import styled from "styled-components";
function Activity({
  item,
  index,
  activities,
  setActivities,
  deleteItemFromBackend,
  setOpenEditPopup,
  openEditPopup,
  setEditId,
  sendItemToBackend,
}) {
  return (
    <Item>
      <td>{index + 1}</td>
      <td>{item.dateOfActivity}</td>
      <td>{item.timeOfActivity}</td>
      <td>{item.distanceOfActivity}</td>
      <td>xxx</td>
      <td>{item.speedOfActivity}</td>
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
          usuń
        </button>
        <button
          id={item.id}
          onClick={(e) => {
            setOpenEditPopup(!openEditPopup);
            setEditId(item.id);
          }}
        >
          edytuj
        </button>
      </Operations>
    </Item>
  );
}

export default Activity;

const Item = styled.tr`
  td {
    text-align: left;
    padding: 16px;
    white-space: nowrap;
  }
  :nth-child(even) {
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
