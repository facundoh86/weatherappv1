
const axios = require('axios');

const getClima = async( ciudad ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudad }&appid=fc0a925f4fd2a07ba1c95e558fbcdffe&units=metric`)


    return resp.data.main.temp;
}

module.exports = {
    getClima
}