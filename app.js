

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async ( direccion ) => {

    try {
        const place  = await  lugar.getLugarLtdLng( direccion );
        const weather = await  clima.getClima( place.direccion )

        return `El clima en ${place.direccion} es de ${ weather }.`
    } catch (e) {
        return `No se pudo eterminar el clima de ${ place }.`
    }

}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log)



