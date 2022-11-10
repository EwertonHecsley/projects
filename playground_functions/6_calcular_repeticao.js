let valores = [0,4,4,4,9,2,1];
let maiorN = 0
let soma = [];

for (i = 0;i <= valores.length; i +=1){
    if (i >= maiorN){
        maiorN = valores[i];
    }
        
}
    for (index = 0; index <= valores.length; index +=1){
        if(valores[index] == maiorN){
            soma++;
        }
    }

console.log(maiorN);
console.log(soma);

function heigthNumber(array){
    for(i = 0; i <= array.length; i +=1){
            if (valores[i] >= maiorN){
                maiorN = valores[i]
            }
        }
        for (index = 0; index <= valores.length; index +=1){
            if(valores[index] == maiorN){
                soma++;
            }
}
    return soma;
}

console.log(heigthNumber([5,9,3,1,2,9,5,10,2,10,5,10]));