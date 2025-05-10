import axios from "axios"

const api = axios.create({
    baseURL:"https://dummyjson.com"//placing base api
})


export const getComments = ()=>{

    return api.get("/comments");//api end point
}