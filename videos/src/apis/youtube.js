import axios from "axios";

const KEY = "AIzaSyAznTbbMN1jSzQ9-MnpMBVGSzErcSH0yiA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
