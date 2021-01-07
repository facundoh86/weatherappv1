
const axios = require('axios');

const getLugarLtdLng = async ( dir ) => {


    const encodeUrl = encodeURI( dir );


    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${ encodeUrl }`,
        headers: {'x-rapidapi-key': '632336908bmsh12eb116ee0af1adp1a40bcjsnae647a37f918'}
    });



    const respuesta = await instance.get();


    if( respuesta.data.data.length === 0){
        throw new Error(`No hay resultados para ${ direccion }`)
    }



    const data         = respuesta.data.data[0];
    const direccion    = data.name;
    const lat          = data.latitude;
    const lng          = data.longitude;

        return{
            direccion,
            lat,
            lng
        }
}


module.exports = {
    getLugarLtdLng
}