import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f9b744e26b7d497c82ade663e2d7591c'
  }
})