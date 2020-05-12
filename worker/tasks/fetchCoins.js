var axios = require("../../apiconf/crypto");
const redis = require("redis");
const { promisify } = require("util");

// redis client configuration
const client = redis.createClient({
  host: "127.0.0.1",
  no_ready_check: true,
  auth_pass: "root123",
});

const setAsync = promisify(client.set).bind(client);

module.exports = async function fetchCoins() {
  const coins = await axios.get("/data/top/mktcapfull?limit=100&tsym=USD");
  const success = await setAsync("allCoins", JSON.stringify(coins.data.Data));
  console.log(success);
};

module.exports();
