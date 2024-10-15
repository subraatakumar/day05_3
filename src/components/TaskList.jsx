import React from "react";
import AddTaskComp from "./AddTaskComp";

const TaskList = () => {
  const [tasks, setTasks] = React.useState([
    { taskId: "1", taskName: "Task1" },
    { taskId: "2", taskName: "Task2" },
    { taskId: "3", taskName: "Task3" },
  ]);

  console.log("TaskList is rendered");
  const handleAddTask = () => {};
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId}>{task.taskName}</li>
        ))}
      </ul>
      <AddTaskComp setTasks={setTasks} />
    </div>
  );
};

export default TaskList;
