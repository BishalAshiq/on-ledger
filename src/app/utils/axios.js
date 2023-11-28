import axios from "axios";

let token = "";

if (typeof window !== "undefined") {
    token = localStorage.getItem("refreshToken");
}

const axiosInstance = axios.create({
    baseURL: "http://43.134.110.133:81/api/",
    // baseURL: "http://192.168.0.106:8000/api/",
    // baseURL: "http://192.168.0.107:8000/api/",
    // baseURL: 'http://159.223.38.62:83/api/',

    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});

export default axiosInstance;
