import axios from 'axios';

class Api {

    constructor() {
        console.log('api importé')
    }

    async getmarkers() {
        const response = await axios.get('http://localhost:8000/api/v1/map');
        const getdata = await response.data;
        return getdata;
    }
}

export default new Api();