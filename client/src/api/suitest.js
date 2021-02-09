import axios from "axios";

export default {
  getTestsInProgress: function (testPackID) {
    return axios.get(
      "https://the.suite.st/api/public/v3/" + testPackID + "/test-pack-runs"
    );
  },
};
