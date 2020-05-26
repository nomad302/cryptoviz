import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://protected-sea-57114.herokuapp.com"
      : "http://localhost:4000",
});
