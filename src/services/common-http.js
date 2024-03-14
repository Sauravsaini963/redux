import axios from "axios";
const http = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
});

http.interceptors.request.use(
    (config)=>{
        const authToken = localStorage.getItem("authToken");
        if(authToken){
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);

export default http;