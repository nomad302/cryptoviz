module.exports = (app, getAsync) => {
  app.get("/news", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const newsData = await getAsync(`ALL_NEWS`);
    return res.send(JSON.parse(newsData));
  });
};
