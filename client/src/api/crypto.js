import axios from "axios";

let url = null;

if (process.env.NODE_ENV === "development") {
  url = "http://localhost:4000";
} else {
  url = "https://protected-sea-57114.herokuapp.com";
}

export default axios.create({
  baseURL: url,
});
