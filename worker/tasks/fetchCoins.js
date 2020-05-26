const axios = require("../../config/crypto");
const { promisify } = require("util");
const client = require("../../config/redisClient")();
const setAsync = promisify(client.set).bind(client);

module.exports = async function fetchCoins() {
  const coins = await axios.get("/data/top/mktcapfull?limit=100&tsym=USD");
  await setAsync("allCoins", JSON.stringify(coins.data.Data));
};

module.exports();
