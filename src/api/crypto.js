import axios from "axios";

export default axios.create({
  baseURL: " https://min-api.cryptocompare.com",
  headers: {
    authorization:
      "Apikey b7e9558ce7b42fb29c92ddfe272950e8c3e803990fe99cc8efbc9325dcd8b648",
  },
});

//b7e9558ce7b42fb29c92ddfe272950e8c3e803990fe99cc8efbc9325dcd8b648
