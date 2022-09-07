import axios from 'axios';

export default () => axios.create({
    baseURL: 'localhost:3000/api/v1/'
})