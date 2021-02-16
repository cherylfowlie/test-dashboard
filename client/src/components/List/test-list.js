import React, { Component } from "react";
import axios from "axios";
export default class TestList extends Component {
  state = {
    tests: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://the.suite.st/api/public/v3/apps/0d5f26db-518e-4693-9b2f-b9633a455b41/versions/aa37d61b-f190-4f09-a83e-2494b27efd22/results/finished",
        {
          headers: {
            Accept: "application/json",
            "X-TokenId": "jolRwaVAaN",
            "X-TokenPassword":
              "a88af5783cc71c41a56b736234bb0a8831eb7b126dfd398722bec210343f1242",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.values);
        this.setState({ tests: res.data.values });
      });
  }
  render() {
    return (
      <ul>
        <h1>Testing API </h1>
        {this.state.tests.map((test) => (
          <li>{test.testPackId}</li>
        ))}
      </ul>
    );
  }
}
