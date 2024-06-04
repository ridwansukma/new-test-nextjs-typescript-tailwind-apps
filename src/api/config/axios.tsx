import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.giovankov.com/api"
});

export default instance;