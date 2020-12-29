// don’t forget to `npm install axios`!
const axios = require('axios');

module.exports = async function(test = "office") {
  let url = "https://api.unsplash.com/search/photos/?client_id=L7p0DjLho9oL3Vgrpa3uIX007UNfg8OfpBHW7lnFWR4&page=1&query="+test;

  return axios.get(url)
      .then(function (response) {
          console.log(url);
          return response.data;
      })
      .catch(function(error) {
          console.log(error);
      });
}


