import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import StatusLine from "../BugTracking/StatusLine";
import Navigation from "../Nav/index";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Homepage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: "",
        description: "",
        urgency: "",
        status: status,
      },
    ]);
  }

  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    });

    let newTaskList = [...filteredTasks, taskToAdd];

    setTasks(newTaskList);

    saveTasksToLocalStorage(newTaskList);
  }

  function deleteTask(taskId) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);

    saveTasksToLocalStorage(filteredTasks);
  }

  function moveTask(id, newStatus) {
    let task = tasks.filter((task) => {
      return task.id === id;
    })[0];

    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    task.status = newStatus;

    let newTaskList = [...filteredTasks, task];

    setTasks(newTaskList);

    saveTasksToLocalStorage(newTaskList);
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    let loadedTasks = localStorage.getItem("tasks");

    let tasks = JSON.parse(loadedTasks);

    if (tasks) {
      setTasks(tasks);
    }
  }

  return (
    <div className="Test">
      <Navigation />
      <main>
        <section>
          <Row>
            <Col>
              <StatusLine
                tasks={tasks}
                addEmptyTask={addEmptyTask}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
                status="Bug List"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <StatusLine
                tasks={tasks}
                addEmptyTask={addEmptyTask}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
                status="In Development"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <StatusLine
                tasks={tasks}
                addEmptyTask={addEmptyTask}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
                status="QA"
              />
            </Col>
          </Row>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
