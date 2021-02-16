import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navigation from "./Nav/index";

const Standup = (props) => (
  <div>
    <tr>
      <td>{props.standup.username}</td>
      <td>{props.standup.description}</td>
      <td>{props.standup.platform}</td>
      <td>{props.standup.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.standup._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteStandup(props.standup._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  </div>
);

export default class StandupList extends Component {
  constructor(props) {
    super(props);

    this.deleteStandup = this.deleteStandup.bind(this);

    this.state = { standup: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/standup/")
      .then((response) => {
        this.setState({ standup: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteStandup(id) {
    axios.delete("http://localhost:3000/standup/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      standup: this.state.standup.filter((el) => el._id !== id),
    });
  }

  standupList() {
    return this.state.standup.map((currentstanduplist) => {
      return (
        <Standup
          standup={currentstanduplist}
          deleteStandup={this.deleteExercise}
          key={currentstanduplist._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <h3>Daily Standup List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Platform</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.standupList()}</tbody>
        </table>
      </div>
    );
  }
}
