const verifica = (name, age) => {
    if(name === "" || age === ""){
        throw new Error('Valores não podem ser vazios');
    }

    if(typeof name !== 'string' || typeof age !== 'number'){
        throw new Error('undefined');
    }
}

const vqv = (name, age) => {

    let obj = { nome: name, idade: age};

    try {
        verifica(name,age);
        return `Oi, meu nome é ${Object.values(obj)[0]}! Tenho ${Object.values(obj)[1]} anos, trabalho na Trybe e mando muito em programação! #VQV!`
    } catch (error) {
        return error.message
    }

}

module.exports = vqv
