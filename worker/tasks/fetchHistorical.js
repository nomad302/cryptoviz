const axios = require("../../config/crypto");
const { promisify } = require("util");
const client = require("../../config/redisClient")();
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
      await setAsync(coin.CoinInfo.Name, JSON.stringify(histData.data));
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports();
