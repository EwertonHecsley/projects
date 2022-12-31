const average = (array) => {

    let valores = 0

    for (let index = 0; index < array.length; index += 1) {
        valores = valores + array[index];
    }

    return Math.round(valores / array.length);
};




module.exports = average

