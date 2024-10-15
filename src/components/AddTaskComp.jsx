import React from "react";

const AddTaskComp = ({ setTasks }) => {
  const [taskId, setTaskId] = React.useState("");
  const [taskName, setTaskName] = React.useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskId.length <= 0 || taskName.length <= 0) {
      return;
    }
    setTasks((prev) => [...prev, { taskId, taskName }]);
    setTaskId("");
    setTaskName("");
  };

  console.log("AddTaskComp is rendered");
  return (
    <form
      style={{ border: "1px solid black", padding: 10 }}
      onSubmit={handleAddTask}
    >
      <h3>Add A Task</h3>
      <label>Task ID: </label>
      <input
        type="text"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      <br />
      <label>Task Name: </label>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTaskComp;
