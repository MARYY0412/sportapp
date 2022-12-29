import React, { useState, createContext } from "react";
import styled from "styled-components";
//components
import AddActivity from "../components/AddActivity";
import Summary from "../components/Summary";
import Table from "../components/Table";
import EditActivity from "../components/EditActivity";

function Bike() {
  const [activities, setActivities] = useState([]);
  //edycja taska
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState();

  const sendItemToBackend = (item) => {
    fetch("http://localhost:8888/bikeActivities", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <Container>
      <Menu>
        <AddActivity
          setActivities={setActivities}
          sendItemToBackend={sendItemToBackend}
        />
        <Summary />
      </Menu>
      <EditActivity
        open={open}
        setOpen={setOpen}
        id={editId}
        activities={activities}
        setActivities={setActivities}
        sendItemToBackend={sendItemToBackend}
      />
      <div className="table-div">
        <Table
          activities={activities}
          setActivities={setActivities}
          open={open}
          setOpen={setOpen}
          setEditId={setEditId}
        />
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
