import axios from "axios";
const newsList = (category) =>
  axios.get(`https://inshortsapi.vercel.app/news?category=${category}`);
const newsApi = { newsList };
export default newsApi;
