import axios from 'axios';

export default {
  getJiraReleasePlan: function () {
    return axios.get("https://project-symbiote.atlassian.net/rest/api/3/version");
  }
};