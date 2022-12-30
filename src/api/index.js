import axios from "axios";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default Api;
