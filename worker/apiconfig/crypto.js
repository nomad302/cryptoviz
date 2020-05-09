var axios = require("axios");

module.exports = axios.create({
  baseURL: " https://min-api.cryptocompare.com",
  headers: {
    authorization:
      "Apikey b7e9558ce7b42fb29c92ddfe272950e8c3e803990fe99cc8efbc9325dcd8b648",
  },
});

module.exports();
//b7e9558ce7b42fb29c92ddfe272950e8c3e803990fe99cc8efbc9325dcd8b648
