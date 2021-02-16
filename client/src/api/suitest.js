import axios from "axios";

export default {
  getTestCases: function () {
    return axios
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
      .then((response) => {
        console.log(`Response: ${response.status} ${response.statusText}`);
        return response.text();
      })
      .then((text) => console.log(text))
      .catch((err) => console.error(err));
  },
};
