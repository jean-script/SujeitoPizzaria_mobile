import axios from "axios";

const api = axios.create({

    // casa ju
    // baseURL:'http://192.168.0.17:3333'
    //minha casa
    baseURL:'http://192.168.0.105:3333'
})

export { api };