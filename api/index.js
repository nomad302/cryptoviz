const express = require("express");
const app = express();
const redis = require("redis");
const { promisify } = require("util");
const axios = require("../apiconf/crypto");

// redis client configuration
const client = redis.createClient({
  host: "127.0.0.1",
  no_ready_check: true,
  auth_pass: "root123",
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

app.get("/coins", async (req, res) => {
  const coins = await getAsync("allCoins");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  return res.send(JSON.parse(coins));
});

app.get("/historical/:coin", async (req, res) => {
  const data = await getAsync(req.params.coin);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  if (!data) {
    const responseData = await axios.get(
      `/data/v2/histoday?fsym=${req.params.coin}&tsym=USD&limit=10`
    );
    const success = await setAsync(
      req.params.coin,
      JSON.stringify(responseData)
    );
    console.log(success);

    return res.send(responseData);
  }

  return res.send(JSON.parse(data));
});

app.listen(4000);
