let = numeros = [1,2,3,4,5,6,7,8,9,0,1];

const generatePhoneNumber = (Array) =>{
    if(Array.length != 11){
        console.log('Array com tamanho incorreto');
    }
        for ( let index = 0; index < Array.length; index +=1){
            if(Array[index] < 0 || Array[index] > 9){
                console.log('Impossivel gerar um número telefonico');
            }
        }
    return console.log(`(${Array[0]}${Array[1]}) ${Array[2]}${Array[3]}${Array[4]}${Array[5]}${Array[6]}-${Array[7]}${Array[8]}${Array[9]}${Array[10]}`)   
}

console.log(generatePhoneNumber(numeros));