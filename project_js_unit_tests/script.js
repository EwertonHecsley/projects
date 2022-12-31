const average = (array) => {

    let valores = 0

    for (let index = 0; index < array.length; index += 1) {
        valores = valores + array[index];
    }

    return Math.round(valores / array.length);
};

const numbers = (arr) =>{

    let tpNumber = [];
    let tpNotNumber = [];
    let resposta;

    for( let index = 0; index < arr.length; index +=1){
        if( typeof arr[index] !== 'number'){
            tpNotNumber.push(arr[index]);
        }else if( typeof arr[index] === 'number'){
            tpNumber.push(arr[index]);
        }
    }

    if(tpNotNumber == ""){
        resposta = true
    }else{
        resposta = false
    }

return resposta

}

module.exports = average, numbers

