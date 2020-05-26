module.exports = (app, getAsync) => {
  app.get("/historical/:coin", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const histData = await getAsync(req.params.coin);

    return res.send(JSON.parse(histData));
  });
};
