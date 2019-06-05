import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 32ed188cbbe23b1d933b823dd3f71b2f51f1e9c13523bdb2bb42dbea09f85ce5"
  }
});
