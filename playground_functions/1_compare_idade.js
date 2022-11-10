// Quero buscar apenas idosos do sexo masculino

let idade = 60;
let sexo = 'm'

const compareTrue = (param1,param2) => {
    let msg = "";
    if(param1 >= 60 && param2 == 'm'){
        msg = true
    }
    else{
        msg = false
    }
    return msg
}
console.log(compareTrue(idade,sexo));















































