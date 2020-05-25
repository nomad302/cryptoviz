var CronJob = require("cron").CronJob;
var fetchCoins = require("./tasks/fetchCoins");
var fetchHistorical = require("./tasks/fetchHistorical");
var fetchCoinNews = require("./tasks/fetchCoinNews");

module.exports = () => {
  var fetchCoinsJob = new CronJob(
    "0 0 */6 * * *",
    fetchCoins,
    null,
    true,
    "America/Los_Angeles"
  );

  var fetchHistoricalJob = new CronJob(
    "0 2 */6 * * *",
    fetchHistorical,
    null,
    true,
    "America/Los_Angeles"
  );

  var fetchCoinNewsJob = new CronJob(
    "0 4 */6 * * *",
    fetchCoinNews,
    null,
    true,
    "America/Los_Angeles"
  );

  // initiate the cron job
  fetchCoinsJob.start();
  fetchHistoricalJob.start();
  fetchCoinNewsJob.start();
};
