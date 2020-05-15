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
const getAsync = promisify(client.get).bind(client);

module.exports = async function fetchHistorical() {
  const resposne = await getAsync("allCoins");
  const coins = JSON.parse(resposne);

  coins.forEach(async (coin) => {
    try {
      const histData = await axios.get(
        `/data/v2/histoday?fsym=${coin.CoinInfo.Name}&tsym=USD&limit=200`
      );
      const success = await setAsync(
        coin.CoinInfo.Name,
        JSON.stringify(histData.data)
      );
      console.log(success);
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports();
