import React from "react";
import TaskList from "./components/TaskList";
import { getDatabase } from "firebase/database";
import firebaseApp, { databaseURL } from "./firebase/firebaseconfig";
import axios from "axios";
const firebaseDatabase = getDatabase();

const App = () => {
  const writeDataToFirebase = async () => {
    try {
      const response = await axios.post(`${databaseURL}/tasks.json`, {
        taskId: "5",
        taskName: "Task 5",
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const readDataFromFirebase = async () => {
    try {
      const response = await axios.get(`${databaseURL}/tasks.json`);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <button onClick={readDataFromFirebase}>Read Data</button>
      <button onClick={writeDataToFirebase}>Write Data</button>
    </>
  );
};

export default App;
