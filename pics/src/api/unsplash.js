import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8324bdbeb577371ecf5c5be7706c957578a960351b8fb0ac773689c53425c88a"
  }
});
