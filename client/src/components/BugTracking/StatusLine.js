import React from "react";
import "../styles/statusLine.scss";
import Task from "./Task";

export default function StatusLine(props) {
  const { status, tasks, addBug, deleteBug, addEmptyTask, moveBug } = props;

  let taskList, tasksForStatus;

  function handleAddEmpty() {
    addEmptyTask(status);
  }

  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addBug={(task) => addBug(task)}
          deleteBug={(id) => deleteBug(id)}
          move
          Bug={(id, status) => moveBug(id, status)}
          key={task.id}
          task={task}
        />
      );
    });
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {taskList}
      <button onClick={handleAddEmpty} className="button addBug">
        +
      </button>
    </div>
  );
}
