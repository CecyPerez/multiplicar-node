const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('==========================');
    console.log(`===TABLA DEL ${base}===`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

    // return new Promise((resolve, reject) => {

    //     if (!Number(base)) {
    //         reject(`El valor introducido en base '${base}' no es un número`);
    //         return;
    //     }

    //     if (!Number(limite)) {
    //         reject(`El valor introducido en limite '${limite}' no es un número`);
    //         return;
    //     }

    //     let data = '';

    //     for (let i = 1; i <= limite; i++) {
    //         data += `${base} * ${i} = ${base * i}\n`;
    //     }

    //     resolve(data);
    // });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido en limite '${limite}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}`);
        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
}