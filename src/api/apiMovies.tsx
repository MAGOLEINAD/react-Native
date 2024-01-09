import axios from "axios";

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: "af986dbcb886ec6a704c2271f561bc10",
        language: "es-ES"
    }
    
})

export default moviesApi

