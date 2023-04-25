import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:5001/api';

const requestGenerico = {
    get : (url) => axios.get(url).then(response),
    post : (url, body) => axios.post(url, body).then(response),
    put : (url, body) => axios.put(url, body).then(response),
    delete : (url) => axios.delete(url).then(response)
};

export default requestGenerico;