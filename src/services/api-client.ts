import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: 'a59ca92cf6ab4143849bc8921febf49f'
    }
})