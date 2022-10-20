import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7143',
})
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    api.defaults.headers.post['Accept'] = 'application/json';
    api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;