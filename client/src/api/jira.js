import axios from 'axios';

export default {
  getJiraReleasePlan: function () {
    return axios.get('https://project-symbiote.atlassian.net/rest/api/3/issue/TD-1', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(
          'cheryljfowlie@gmail.com:cIlKZDJfhzQ9x21tWUjl5753'
        ).toString('base64')}`,
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log(
          `Response: ${response.status} ${response.statusText}`);
        return response.text();
      })
      .then(text => console.log(text))
      .catch(err => console.error(err));
  }
};