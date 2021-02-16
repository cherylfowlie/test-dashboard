import React from "react";
import axios from "axios";

var config = {
  method: "get",
  url: "https://project-symbiote.atlassian.net/rest/api/3/issue/TD-1",
  headers: {
    Authorization: process.env.JIRA_COOKIE,
    Cookie: process.env.JIRA_AUTH,
  },
};

export default class JiraList extends React.Component {
  state = {
    issues: [],
  };

  componentDidMount() {
    axios(config)
      .then((res) => {
        console.log(res);
        this.setState({
          issues: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.issues.map((issue) => (
          <li>{issue.id}</li>
        ))}
      </ul>
    );
  }
}
