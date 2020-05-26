module.exports = (app, getAsync) => {
  app.get("/coins", async (req, res) => {
    const coins = await getAsync("allCoins");
    res.header("Access-Control-Allow-Origin", "*");
    return res.send(JSON.parse(coins));
  });
};
