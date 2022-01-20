import axios from "axios";

export default axios.create({
    baseURL: "https://apitestcinvestav.herokuapp.com/v1/",
    headers: {
        "Content-type": "application/json",
    },
});
